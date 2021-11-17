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

const Description = ({navigation, route}) => {
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
              style={{width: 250, height: 150}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 0.5}}></View>
        </View>

        <View style={{marginTop: 50}}>
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

  //   button: {
  //     padding: 10,
  //     borderRadius: 10,
  //     backgroundColor: colors.textColor,
  //     marginTop: 5,
  //   },
  //   buttonText: {
  //     color: colors.background,
  //     fontSize: 15,
  //     fontWeight: 'bold',
  //   },
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
