import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native'
import {setCurrentGeoLocation} from '../redux/action/locationAction';
import GetLocation from 'react-native-get-location'
import {useSelector, useDispatch} from 'react-redux'
import MainHeader from '../components/MainHeader';
import OfferImageSlider from '../components/OfferImageSlider';
import RestaurantsNearBy from '../components/RestaurantsNearBy';
import {getGeoCodeAPI} from '../utils/api';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const locationData = useSelector(state => state.geoLocation)
    const [nearByRestaurant, setNearByRestaurant] = useState([]);
    
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
      dispatch(setCurrentGeoLocation(location))
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    })
  }, [])

  useEffect(() => {
    console.log('locat')
    console.log(locationData)
    if(locationData?.latitude) {
        // const {latitude, longitude} = locationData;
        console.log(locationData.latitude, locationData.longitude)
        const geoCodeDetails = getGeoCodeAPI(locationData.latitude, locationData.longitude)
        .then(response => {
            setNearByRestaurant([...response.nearby_restaurants])
        })
        .catch(err => {
            console.log(err.message)
        });
        
   }
  }, [locationData])
    return (
        <SafeAreaView>
            <MainHeader />
            <ScrollView >
            <View style={styles.searchView}>
                <View style={styles.searchArea}>
                    <Image 
                        source={{uri: 'https://img.icons8.com/pastel-glyph/2x/search--v2.png'}}
                        style={{width: 20, height: 20}}
                    />
                    <TextInput style={styles.searchBar} placeholder="Search for restaurants ..." />
                </View>
            </View>
            <Image source={{uri: 'https://images.freekaamaal.com/post_images/1534231566.jpeg'}} 
                style={{width:'100%', height:200, marginTop: 15}}
            />
            <OfferImageSlider />

            <View style={styles.nearBy}>
                <Text style={styles.nearByHeader}>Restaurants Near by :</Text>
                {nearByRestaurant.length === 0 ? <Image
                    source={{uri: 'https://lh3.googleusercontent.com/proxy/4oAxiwuAYHACYWyrex2iCONBmhjMcp-D4AKFLPeM-8HL5qIypE5B-mjXtFY6xN4bJ_nLiNObv6E2MbD1AcQlMvw'}}
                    style={styles.lottie}
                />
                : <RestaurantsNearBy data={nearByRestaurant} /> }
                
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

HomeScreen.navigationOptions = {
    headerShown: false,
}
export default HomeScreen

const styles = StyleSheet.create({
    searchView: {
        display: 'flex',
        alignItems: 'center',
    },
    searchArea: {
        flexDirection: 'row',
        alignItems:'center',
        width: '85%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10
    },
    searchBar: {
        fontSize: 20,
        marginLeft: 5,
        width: '90%'
    },
    nearBy: {
        marginTop: 15
    },
    nearByHeader: {
        fontSize: 18,
        fontWeight: '600',
        color: '#7f8c8d',
        marginLeft: 15
    },
    lottie: {
        width: 100,
        height: 100
    }
})
