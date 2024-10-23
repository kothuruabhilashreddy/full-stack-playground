import { View, Text, Image } from "react-native";
import { TextInput, Alert } from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { login } from "./auth";

export default function SignIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert("Sign In", "Please enter all the fields");
      return;
    }
    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current);
    setLoading(false);
    if (!response.success) {
      Alert.alert("Sign In", response.msg);
    }
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex"
      >
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeModel="contain"
            source={require("../../assets/images/SBU72ppi.png")}
          />
        </View>

        <View className="gap-2">
          {/*  */}
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800 pt-4"
          >
            Sign In
          </Text>
          <View className="gap-3">
            {/* */}
            <View
              style={{ height: hp(7) }}
              className="flex-row  gap-4 px-2 bg-neutral-100 items-center border rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email address"
                placeholderTextColor={"gray"}
                onChangeText={(value) => {
                  emailRef.current = value;
                }}
              />
            </View>
            <View
              style={{ height: hp(7) }}
              className="flex-row  gap-4 px-2 bg-neutral-100 items-center border rounded-xl"
            >
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"gray"}
                onChangeText={(value) => {
                  passwordRef.current = value;
                }}
              />
            </View>
            <View className="gap-1">
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-SpaceMonoBoldItalic text-right text-neutral-500"
              >
                Forgot password ?
              </Text>
            </View>
            <TouchableOpacity
              style={{ height: hp(6.5) }}
              className="bg-indigo-500 rounded-xl justify-center items-center"
              onPress={handleSignIn}
            >
              <Text
                style={{ fontSize: hp(2.7) }}
                className="text-white font-bold tracking-wider"
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
