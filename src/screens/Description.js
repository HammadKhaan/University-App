import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';
import Logo from '../assets/logo.png';
import uniLogo from '../assets/paf-kiet.png';
import ADIcons from 'react-native-vector-icons/AntDesign';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import RNFetchBlob from 'rn-fetch-blob';

const Description = ({navigation, route}) => {
  const download = () => {
    console.log(`pressed`);
    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
    })
      .fetch(
        'GET',
        'https://drive.google.com/file/d/1ougZyjXdUYzUa1TNhQtVs-uMKqIUdtSo/view?usp=sharing',
        {
          //some headers ..
        },
        console.log(`fetch`),
      )
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
      });
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
          <View style={{flex: 2}}>
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
          <Text style={styles.description}>
            {/* "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." */}
            {item?.description}
          </Text>
        </View>
        <View style={{marginVertical: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              download();
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
