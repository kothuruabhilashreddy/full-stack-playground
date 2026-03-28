import { View, Text, Alert } from "react-native";
import { ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { signup } from "./auth";
import { db } from "./config";
import { saveUserData } from "./auth";

export default function SignUp() {
  const [email, setEmail] = useState("akothuru@cs.stonybrook.edu");
  const [password, setPassword] = useState("12345678");
  const [firstName, setFirstname] = useState("Abhilash Reddy");
  const [lastName, setLastName] = useState("Kothuru");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("patient");

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const user = await signup(email, password);
      console.log("*****signup success*****");
      if (user) {
        const id = user.uid;
        await saveUserData(id, firstName, lastName, role);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Email already in use, please choose a different email");
      } else if (error.code === "auth/weak-password") {
        Alert.alert("Weak password, Please choose a stronger password");
      } else {
        Alert.alert("signup error: " + error.message);
      }
    }
  };

  return (
    <View className="bg-red-200 pt-20">
      <Text className="text-3xl text-center">SignUp</Text>
      <TouchableOpacity onPress={handleSignUp}>
        <View>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
