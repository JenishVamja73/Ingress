import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Style from './style';

const Home = () => {
    const [leaveTypes, setLeaveTypes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaveTypes = async () => {
            try {
                // Retrieve token from AsyncStorage
                const token = await AsyncStorage.getItem('authToken');
                console.log("Token from AsyncStorage:", token);

                if (!token) {
                    Alert.alert("Error", "Token is missing. Please log in again.");
                    return;
                }

                // Make API call with token
                const response = await axios.get('https://ingress.bizcrmapp.com/api/v1/leave-type', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("API Response:", response.data.data); // Debugging
                setLeaveTypes(response.data.data); // Update state with API data
            } catch (error) {
                console.error("Error fetching leave types:", error);
                Alert.alert("Error", "Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchLeaveTypes();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    const handleDelete = (rowKey) => {
        const newData = leaveTypes.filter((item) => item.id !== rowKey);
        setLeaveTypes(newData);
        Alert.alert("Deleted", `Item with ID: ${rowKey} deleted successfully.`);
    };

    return (
        <View style={{ flex: 1, padding: 16, backgroundColor: "#fff" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Leave Types:</Text>
            <SwipeListView
                data={leaveTypes}
               
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: "#f9f9f9",
                            padding: 16,
                            marginBottom: 8,
                            borderRadius: 8,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: "black" }}>{item.type_name}</Text>
                    </View>
                )}
                renderHiddenItem={({ item }) => (
                    <View style={Style.editView}>
                    <TouchableOpacity
                        style={Style.editButton}
>
                        <Text style={{ color: 'white' }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={Style.DeletButTON}
                     >
                        <Text style={{ color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75} 
            />

<View style={Style.AddView}>
                <Pressable style={Style.AddButton} onPress={() => {
                    
                }}>
                    <AntDesign name="plus" size={30} color="white" />
                </Pressable>
            </View>
        </View>
    );
};

export default Home;
