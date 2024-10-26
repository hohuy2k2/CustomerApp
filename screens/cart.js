import { View, Text, Alert, TextInput, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
const Cart = () => {

    const [response, setResponse] = useState([]);

    useEffect(() => {
        getCart();
    }, [])
    const getCart = async () => {
        const res = await axios.post("http://10.0.2.2:3000/get/cart");

        if (res && res.data) {

            setResponse(res.data.cart);
         
        }
    }
    return (
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40, backgroundColor: "white" }}>
            <View style={{ height: "100%", width: "100%", paddingLeft: 10, paddingRight: 10 }}>

                {response ? (
                    <ScrollView>
                    {response.map((response) => (
                        <View key={response._id} style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}>
                            <Text>Email: {response.email}</Text>
                            <Text>Type: {response.class.type}</Text>
                            <Text>Capacity: {response.class.capacity}</Text>
                            <Text>Date: {response.class.date}</Text>
                            <Text>Description: {response.class.description}</Text>
                            <Text>Duration: {response.class.duration}</Text>
                            <Text>Price: {response.class.price}</Text>
                            <Text>Time: {response.class.time}</Text>
                        </View>
                    ))}
                </ScrollView>
                )
                    
              : (<></>)}







            </View>
        </View>
    )
}

export default Cart