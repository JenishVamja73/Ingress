import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from "./style";



const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  
  // Function to handle login API call
  const handleLogin = async () => {
    const apiUrl = 'https://ingress.bizcrmapp.com/api/v1/auth/login';
  
    if (!email || !password) {
      Alert.alert('Validation Error', 'Email and password are required!');
      return;
    }
  
    try {
      const response = await axios.post(apiUrl, {
        email: email,
        password: password,
      });
  
      if (response.data && response.data.data && response.data.data.token) {
        const token = response.data.data.token; // Correctly extract token
        console.log("Login Successful:", response.data);
        console.log(token,"token")
  
        // Save token to AsyncStorage
        await AsyncStorage.setItem('authToken', token);
  
        Alert.alert('Success', 'Logged in successfully!');
        
        // Navigate to Home screen
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Token not found in the response.');
      }
    } catch (error) {
      console.error("Error logging in:", error);
      Alert.alert('Error', 'Login failed. Check your credentials.');
    }
  };

  return (
    <View style={style.conster}>
      <View style={style.iconView}>
        <FontAwesome name="user" size={80} color="white" style={{ alignSelf: "center" }} />
        
        <View style={style.TextInputView}>
          <FontAwesome name="user" size={30} color="white" style={{ alignSelf: "center", left: "4%" }} />
          <TextInput
            placeholder="Enter email"
            style={{ left: "5%" }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            
          />
        </View>
        
        <View style={style.TextInputView}>
          <AntDesign name="lock" size={30} color="white" style={{ alignSelf: "center", left: "4%" }} />
          <TextInput
            placeholder="Enter password"
            style={{ left: "5%" }}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View>
        <Pressable style={style.LoginButton} onPress={handleLogin}>
          <Text style={{ textAlign: "center", fontSize: 15 }}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
