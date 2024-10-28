import { View, Text, Alert, TextInput, ScrollView,Platform,StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Picker } from '@react-native-picker/picker';
const Home = ({ navigation }) => {
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState("All");
    const [email, setEmail] = useState("");
    const [class_, setClass] = useState([]);
    const getClass = async () => {
        const res = await axios.post("http://10.0.2.2:3000/get/class");
     
        if (res && res.data) {
            setResponse(res.data._class);
      
        }
    }
    useEffect(() => {
        getClass();
        },[]);
   

    useEffect(()=>{
        findClass();
    },[search])
    const findClass = async () => {
        const f_class = await response.filter((class_) =>
            search === "All" ||   class_.date.toLowerCase().includes(search.toLowerCase()));
          if (f_class.length > 0) {
          
            setClass(f_class);
      
          } else {
           
          }
    }
    const addClassToCart = async (id, email) => {
        if(emailValidate(email) && id)
        {
        const res = await axios.post("http://10.0.2.2:3000/add/cart", { id, email })
        if (res && res.data.mess) {
            Alert.alert(res.data.mess);
        }
        else {
            Alert.alert("error!!!");
        }
    }
    else{
        Alert.alert("Invalid email or something wrong")
    }
    }
    const emailValidate = (e) => {
        const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return email.test(e);
    };
    return (
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40, backgroundColor: "white" }}>
            <View style={{ height: "100%", width: "100%", paddingLeft: 10, paddingRight: 10 }}>
                <View>
                    <TextInput
                        style={{ fontSize: 18, marginTop: 15, marginBottom: 15 }}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                    />

                </View>
                <View>
                    <Picker
                        selectedValue={search}
                        onValueChange={(itemValue, itemIndex) =>
                            setSearch(itemValue)
                          
                        }
                       
                        >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                        <Picker.Item label="All" value="All" />
                    </Picker>
                </View>
                <View style={{marginBottom:20,backgroundColor:"#336B8B",width:"30%",alignItems:'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate("Cart")}>
                        <Text style={{color:"white"}}>View Cart</Text>
                    </TouchableOpacity>
                </View>
                {response ?
                    (
                        <ScrollView>
                             {response.length > 0 &&class_.length ==0 && search=="All"? (response.map((response) => (
                                  <View key={response._id} style={{  justifyContent: "space-between", paddingLeft: 10, paddingRight: 10,borderColor:"black",borderWidth:2 }}>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Capacity : {response.capacity}</Text>
                                  <Text style={{ fontSize: 15, paddingTop: 10 }}>Date : {response.date}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Duration : {response.duration}</Text>
                                  <Text style={{ fontSize: 15, paddingTop: 10 }}>Price : {response.price}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Time : {response.time}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Type : {response.type}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Description : {response.description}</Text>
                                  <View>
                                  <TouchableOpacity onPress={()=>addClassToCart(response._id,email)}
                                  style={{paddingTop:10,paddingBottom:10,borderColor:"#336B8B",borderWidth:1,backgroundColor:"#336B8B",alignItems:'center',borderRadius:20}}>
                                    <Text style={{color:"white"}}>Add To Cart</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                             ))):(
                            <>
                           </>
                             )}
                               {class_.length > 0  ? (class_.map((class_) => (
                                  <View key={class_._id} style={{  justifyContent: "space-between", paddingLeft: 10, paddingRight: 10,borderColor:"black",borderWidth:2 }}>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Capacity : {class_.capacity}</Text>
                                  <Text style={{ fontSize: 15, paddingTop: 10 }}>Date : {class_.date}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Duration : {class_.duration}</Text>
                                  <Text style={{ fontSize: 15, paddingTop: 10 }}>Price : {class_.price}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Time : {class_.time}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Type : {class_.type}</Text>
                                  <Text style={{ fontSize: 15,  paddingTop: 10 }}>Description : {class_.description}</Text>
                                  <View>
                                  <TouchableOpacity onPress={()=>addClassToCart(class_._id,email)}
                                  style={{paddingTop:10,paddingBottom:10,borderColor:"#336B8B",borderWidth:1,backgroundColor:"#336B8B",alignItems:'center',borderRadius:20}}>
                                    <Text style={{color:"white"}}>Add To Cart</Text>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                             ))):(
                            <>
                           </>
                             )}
                        </ScrollView>
                    ) :
                    (<></>)}









            </View>
        </View>
    )
}

export default Home