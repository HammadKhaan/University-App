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
import ADIcons from 'react-native-vector-icons/AntDesign';

const UniversityList = ({navigation, route}) => {
  // const engineeringUnis = [
  //   'PAF-Kiet',
  //   'NED University',
  //   'Bahria University',
  //   'Dawood University',
  // ];

  const {value, UniList} = route?.params;

  return (
    <ScrollView style={{backgroundColor: colors.background, height: '100%'}}>
      <View style={styles.main}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
              style={{width: 250, height: 170}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <View>
          <Text style={styles.text}>{`List of ${value} Universities`}</Text>
        </View>
        <View>
          <FlatList
            data={UniList}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.uniButtons}
                  onPress={() => {
                    navigation.navigate('Description', {item: item});
                  }}>
                  <Text style={styles.uniButtonText}>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
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
    marginTop: 30,
    fontWeight: 'bold',
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
  uniButtons: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.textColor,
    marginTop: 15,
  },
  uniButtonText: {
    color: colors.background,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UniversityList;
