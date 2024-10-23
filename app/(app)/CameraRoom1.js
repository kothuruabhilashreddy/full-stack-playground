import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import CameraRoomHeader from "../../components/CameraRoomHeader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function CameraRoom1() {
  const item = useLocalSearchParams();
  const openCamera = () => {
    router.push("/CameraScreen");
  };
  return (
    <View className="flex-1 bg-white">
      <CameraRoomHeader />
      <View className="pl-6 pr-6">
        <Text style={{ fontSize: hp(3.2) }} className="font-medium">
          Upload a photo of your Face
        </Text>
        <Text style={{ fontSize: hp(2) }} className="pt-3 pb-3">
          Follow these guidelines to take the perfect image
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: hp(30.3), // Fixed height for the container
            width: hp(40.3), // Keep the aspect ratio 1:1 (square)
            borderWidth: 2,
            borderColor: "black",
            overflow: "hidden", // Ensure the image doesn't overflow
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }} // Contain the image within the box
            source={{
              uri: "https://photoaid.com/_optimized/howToPrepare2.016fe490-opt-1080.WEBP",
            }}
            transition={100}
          />
        </View>
      </View>

      <TouchableOpacity onPress={openCamera}>
        <View className="flex-row justify-center items-center p-4 ml-8 mr-8 mt-4 mb-4 border rounded-full">
          <Fontisto name="camera" size={24} color="black" />
          <Text className="font-medium ml-2">
            {" "}
            Open camera and take picture
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View className="flex-row justify-center items-center bg-indigo-400 p-4 ml-8 mr-8 mt-4 mb-4 border rounded-full">
          <Text className="font-medium mr-2">Continue </Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
