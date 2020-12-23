import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'

const OfferImageSlider = () => {
    return (
        <View>
            <ScrollView horizontal={true}>
                <Image style={styles.imageDiscount} 
                    source={{uri: 'https://www.shopickr.com/wp-content/uploads/2018/10/zomato-no-cooking-sunday-flat-50.gif'}} />
                <Image style={styles.imageDiscount} 
                    source={{uri: 'https://cdn.grabon.in/gograbon/images/merchant/1541762703716.jpg'}} />
                <Image style={styles.imageDiscount} 
                    source={{uri: 'https://i.pinimg.com/originals/30/74/bc/3074bcb35ab6b33f3ad3222a0a33d7bc.png'}} />
                <Image style={styles.imageDiscount} 
                    source={{uri: 'https://cdn.grabon.in/gograbon/images/merchant/1543056680806.png'}} />
                
            </ScrollView>
        </View>
    )
}

export default OfferImageSlider

const styles = StyleSheet.create({
    imageDiscount: {
        width: 280,
        height: 165,
        margin: 10,
        borderRadius: 20
    }
})
