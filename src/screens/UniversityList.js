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
  const handleSearch = e => {
    let text = e.toLowerCase();
    //let trucks = this.state.data;
    let filteredName = dataCopy.filter(item => {
      return item.name.toLowerCase().includes(text);
    });
    if (!text || text === '') {
      setData(UniList);
      setEmpty(false);
      console.log(`empty`);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      // set no data flag to true so as to render flatlist conditionally
      console.log(`wrong`);
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
  const [data, setData] = useState(UniList);
  const [dataCopy] = useState(UniList);
  const [empty, setEmpty] = useState(false);

  const search = (
    <View style={styles.searchView}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor="white"
        style={styles.search}
        value={query}
        onChangeText={e => {
          handleSearch(e);
          setQuery(e);
          console.log(query);
        }}
      />
    </View>
  );
  const header = (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        style={{paddingVertical: 22}}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <ADIcons name="arrowleft" color="white" size={30} />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={Logo}
          style={{width: 200, height: 170}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 0.2}}></View>
    </View>
  );
  const title = (
    <View>
      <Text style={styles.text}>{`List of ${value} Universities`}</Text>
    </View>
  );
  const noResults = (
    <View style={styles.noResultsView}>
      <Text style={styles.noResultsText}>No Results</Text>
    </View>
  );
  const list = (
    <FlatList
      ListHeaderComponent={search}
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
          </>
        );
      }}
    />
  );

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.main}>
        {header}
        {title}
        <View style={{paddingVertical: 10}}>
          {empty ? (
            <>
              {search}
              {noResults}
            </>
          ) : (
            <>{list}</>
          )}
        </View>
      </View>
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
    paddingHorizontal: 15,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  },
  searchView: {
    marginVertical: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    borderColor: 'white',
    borderWidth: 2,
    height: 40,
    width: '70%',
    paddingHorizontal: 10,
    color: colors.textColor,
  },
  noResultsView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },

  noResultsText: {
    color: 'grey',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default UniversityList;
