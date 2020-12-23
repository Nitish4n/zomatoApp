import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Restaurant from './Restaurant';


const RestaurantsNearBy = ({data}) => {
    return (
        <ScrollView>
        {data.map(restaurant => (
            <Restaurant data={restaurant} />
        ))}
            
        </ScrollView>
    )
}

export default RestaurantsNearBy

const styles = StyleSheet.create({})
