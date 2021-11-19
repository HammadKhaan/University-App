import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import colors from '../constants/colors';
import Logo from '../assets/logo.png';
import uniLogo from '../assets/paf-kiet.png';
import ADIcons from 'react-native-vector-icons/AntDesign';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'rn-fetch-blob';

const {config, fs} = RNFetchBlob;
const {DownloadDir} = fs.dirs;

const Description = ({navigation, route}) => {
  const checkPermission = async () => {
    try {
      download();
    } catch (error) {
      console.warn(error);
    }
  };
  const download = () => {
    const options = {
      fileCache: false,
      addAndroidDownloads: {
        useDownloadManager: true, // true will use native manager and be shown on notification bar.
        notification: true,
        path: `${DownloadDir}/newImage.png`,
        // path: `${DownloadDir}/${face}-${Date.now()}.${type}`,
        description: 'Downloading the image',
        appendExt: 'png',
        mime: 'image/jpeg',
      },
    };
    const path = `https://cdn.shopify.com/s/files/1/0531/8610/1427/products/6f3de717-9776-44e3-a118-2e6bcd76bd1d_1920x.jpg`;

    config(options)
      .fetch('GET', path)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getExtension = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  const {item} = route?.params;
  console.log(`item`, item);
  return (
    <ScrollView style={{backgroundColor: colors.background, height: '100%'}}>
      <View style={styles.main}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{paddingVertical: 20, flex: 0.5}}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <ADIcons name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Logo}
              style={{width: 250, height: 130}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 0.5}}></View>
        </View>

        <View style={{marginTop: 25}}>
          <Image
            source={item?.logo}
            style={{width: 250, height: 150}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.text}>Description</Text>
        </View>
        <View>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              checkPermission();
            }}>
            <Text style={styles.buttonText}>DOWNLOAD UNIVERSITY FORM</Text>
            <FAIcons
              name="download"
              color={colors.background}
              size={20}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    marginTop: 25,
    fontWeight: 'bold',
  },
  description: {
    color: colors.textColor,
    fontSize: 15,
    marginTop: 10,
  },

  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.textColor,
    marginTop: 5,
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.background,
    fontSize: 15,
    fontWeight: 'bold',
  },
  //   uniButtons: {
  //     padding: 10,
  //     borderRadius: 10,
  //     backgroundColor: colors.textColor,
  //     marginTop: 15,
  //   },
  //   uniButtonText: {
  //     color: colors.background,
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //   },
});

export default Description;
