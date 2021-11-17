import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../constants/colors';
import Logo from '../assets/logo.png';

const Splash = ({navigation}) => {
  return (
    <View>
      <View style={styles.main}>
        <View>
          <Image
            source={Logo}
            style={{width: 250, height: 250}}
            resizeMode="contain"
          />
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.textView}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.text}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: colors.background,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

export default Splash;
