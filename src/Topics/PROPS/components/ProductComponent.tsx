import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface ProductProps {
    productName: string;
    productImage: string;
    productPrice: number;
    productDescription: string;
    isFeatured: boolean;
}

const ProductComponent = ({productName, productPrice, productImage, productDescription, isFeatured}: ProductProps ) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: productImage }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productPrice}>${productPrice}</Text>
        <Text style={styles.productDescription}>{productDescription}</Text>
        <Text style={styles.productFeatured}>{isFeatured ? 'Featured' : ''}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    productContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        borderRadius: 25,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,

    },
    imageContainer: {
        width: 150,
        height: 150,
        marginBottom: 5,
        marginTop: 1,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    productFeatured: {
        fontSize: 14,
        color: '#666',
    }
})

export default ProductComponent