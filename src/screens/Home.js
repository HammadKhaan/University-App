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
import DropDownPicker from 'react-native-dropdown-picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import PAFKiet from '../assets/paf-kiet.png';
import NED from '../assets/NED.svg';
import BahriaUniversity from '../assets/BahriaUniversity.png';
import Dawood from '../assets/Dawood.png';
import IBA from '../assets/IBA.png';
import IqraUniversity from '../assets/IqraUniversity.png';
import IOBM from '../assets/IOBM.png';
import KUBS from '../assets/KUBS.png';
import JSMU from '../assets/JSMU.png';
import BUMDC from '../assets/BUMDC.png';
import BMU from '../assets/BMU.png';
import ADIcons from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Engineering', value: 'Engineering'},
    {label: 'Business', value: 'Business'},
    {label: 'Medical', value: 'Medical'},
  ]);
  const topRated = [
    {
      name: 'PAF-Kiet',
      logo: PAFKiet,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Karachi University Business School (KUBS)',
      logo: KUBS,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Iqra University',
      logo: IqraUniversity,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  const engUni = [
    {
      name: 'PAF-Kiet',
      logo: PAFKiet,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'NED University',
      logo: NED,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Bahria University',
      logo: BahriaUniversity,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Dawood University',
      logo: Dawood,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const businessUni = [
    {
      name: 'IBA',
      logo: IBA,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Iqra University',
      logo: IqraUniversity,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'IOBM',
      logo: IOBM,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Karachi University Business School (KUBS)',
      logo: KUBS,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const medUni = [
    {
      name: 'Jinnah Sindh Medical University',
      logo: JSMU,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Bahria Medical University',
      logo: BUMDC,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      name: 'Baqai Medical University',
      logo: BMU,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  const logo = (
    <View style={{flex: 1}}>
      <Image
        source={Logo}
        style={{width: 250, height: 170}}
        resizeMode="contain"
      />
    </View>
  );
  const divider = <View style={styles.divider} />;
  const searchCategories = (
    <View style={{flex: 0.8, marginTop: 10}}>
      <Text style={styles.text}>Search by Categories</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (value === null) {
              setCategories(true);
            } else if (value === 'Engineering') {
              navigation.navigate('University', {
                value: value,
                UniList: engUni,
              });
            } else if (value === 'Medical') {
              navigation.navigate('University', {
                value: value,
                UniList: medUni,
              });
            } else if (value === 'Business') {
              navigation.navigate('University', {
                value: value,
                UniList: businessUni,
              });
            }
          }}>
          <Text style={styles.buttonText}> GO </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const consult = (
    <View style={{marginTop: 10}}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Consult with our chat bot</Text>
      </TouchableOpacity>
    </View>
  );
  const topRatedUniversities = (
    <View style={{flexDirection: 'row'}}>
      <ADIcons
        name="star"
        color="gold"
        style={{alignSelf: 'center', marginHorizontal: 5}}
        size={20}
      />
      <Text style={styles.topRated}>Top Rated Universities</Text>
      <ADIcons
        name="star"
        color="gold"
        style={{alignSelf: 'center', marginHorizontal: 5}}
        size={20}
      />
    </View>
  );
  const list = (
    <View style={{paddingVertical: 10}}>
      <FlatList
        data={topRated}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.uniButtons}
              onPress={() => {
                navigation.navigate('Description', {item: item});
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={item.logo}
                  style={{height: 100, width: 100}}
                  resizeMode="contain"
                />

                <View style={{width: '68%', paddingHorizontal: 10}}>
                  <Text numberOfLines={1} style={styles.uniButtonText}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={4} style={{color: 'grey'}}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
  const emptyAlert = (
    <AwesomeAlert
      show={categories}
      title="Empty"
      message="Please select a category!"
      showConfirmButton={true}
      confirmText="OK"
      confirmButtonColor={colors.background}
      onConfirmPressed={() => {
        setCategories(false);
      }}
    />
  );
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.main}>
        {logo}
        {divider}
        {searchCategories}
        {divider}
        {consult}
        {divider}
        <View style={{marginTop: 20}}>
          {topRatedUniversities}
          {list}
        </View>
      </View>
      {emptyAlert}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.background,
    height: '100%',
  },
  main: {
    height: '100%',
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    color: colors.textColor,
    fontSize: 15,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.textColor,
    marginTop: 5,
  },
  buttonText: {
    color: colors.background,
    fontSize: 15,
    fontWeight: 'bold',
  },
  uniButtons: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.textColor,
    marginTop: 10,
  },
  uniButtonText: {
    color: colors.background,
    fontSize: 17,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 900,
    marginTop: 10,
  },
  topRated: {
    fontSize: 20,
    color: colors.textColor,
    fontWeight: 'bold',
  },
});

export default Home;
