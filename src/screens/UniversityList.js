import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

  const handleSearch = e => {
    let text = e.toLowerCase();
    //let trucks = this.state.data;
    let filteredName = dataCopy.filter(item => {
      return item.name.toLowerCase().includes(text);
    });
    if (!text || text === '') {
      setData(UniList);
      setEmpty(false);
      //console.log(`empty`);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      // set no data flag to true so as to render flatlist conditionally
      //console.log(`wrong`);
      setData([]);
    } else if (Array.isArray(filteredName)) {
      setData(filteredName);
      if (filteredName?.length === 0) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    }
  };

  const [query, setQuery] = useState('');

  const {value, UniList} = route?.params;
  // console.log(`UniList`, UniList);
  const [data, setData] = useState(UniList);
  const [dataCopy] = useState(UniList);
  //console.log(`data`, data);
  const [empty, setEmpty] = useState(false);

  return (
    <ScrollView style={{backgroundColor: colors.background, height: '100%'}}>
      <View style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            //backgroundColor: 'red',
          }}>
          <TouchableOpacity
            style={{
              paddingVertical: 22,
            }}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <ADIcons name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1.5,
              //backgroundColor: 'red',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <Image
              source={Logo}
              style={{width: 200, height: 170}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              marginVertical: 22,
            }}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor="white"
              style={{
                borderColor: 'white',
                borderWidth: 2,
                height: 40,
                width: 100,
                paddingHorizontal: 10,
                color: 'white',
              }}
              value={query}
              onChangeText={e => {
                handleSearch(e);
                setQuery(e);
                console.log(query);
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>{`List of ${value} Universities`}</Text>
        </View>
        <View style={{paddingVertical: 10}}>
          {empty ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 35,
                  fontWeight: 'bold',
                }}>
                No Results
              </Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={({item}) => {
                return (
                  <>
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

                        <View style={{width: 250, paddingHorizontal: 10}}>
                          <Text numberOfLines={1} style={styles.uniButtonText}>
                            {item.name}
                          </Text>
                          <Text numberOfLines={4}>{item.description}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                );
              }}
            />
          )}
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
    //alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
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
    //textAlign: 'center',
  },
});

export default UniversityList;
