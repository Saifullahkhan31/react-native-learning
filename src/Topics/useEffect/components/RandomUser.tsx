import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RandomUser = () => {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchRandomUser = async () => {

            try {
                
                const response = await axios.get(
                    "https://randomuser.me/api/?results=10"
                )
            
            const users = response.data.results
    
            setUserData(users)
    
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
    
        }
    
        fetchRandomUser()

    }, [])

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>Error: {error}</Text>
    }

    const renderitem = ({item}: any ) => {
    return(
        <View style={styles.dataContainer}>

            <Image style={styles.image} source={{uri: item.picture.thumbnail}}/>

            <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{item.name.first} {item.name.last}</Text>
            <Text style={styles.emailText} >{item.email}</Text>
            </View>

        </View>
    )
    }


  return (
    <View>
      
        <FlatList

            data={userData}
            keyExtractor={(item: any) => item.login.uuid}
            renderItem={renderitem}

        />

    </View>
  )
}

const styles = StyleSheet.create( {
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 10,
    },
    dataContainer: {
    alignItems: "center",
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    },
    infoContainer: {
        flexDirection: 'column',
        marginLeft: 16,
    },
    nameText: {
        fontWeight: 'bold',
    },
    emailText: {
        color: '#666',
        paddingTop: 10
    }

} )

export default RandomUser