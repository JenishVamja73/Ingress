import axios from 'axios';
import React, { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import style from "./style";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle login API call
  const handleLogin = async () => {
    // Validate input
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }

    try {
      // API URL
      const url = 'https://ingress.bizcrmapp.com/api/v1/auth/login';

      // Sending POST request to login API
      const response = await axios.post(url, {
        email: email,
        password: password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle success response
      if (response.status === 200) {
        console.log("Login Success:", response.data);
        Alert.alert("Success", "Logged in successfully!");
        // You can store tokens here or navigate to another screen
      } else {
        Alert.alert("Error", "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
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
