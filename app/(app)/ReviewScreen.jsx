import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import Swiper from "react-native-swiper";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native";

export default function ReviewScreen({
  userImages,
  handleRetakeImage,
  handleSubmitRequest,
}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // <View className="flex-1 justify-center">
    //   <View className="flex-1">
    //     <Image
    //       style={{ aspectRatio: 1, borderWidth: 2, borderColor: "black" }}
    //       source={userImages[0]}
    //       transition={100}
    //     />
    //   </View>
    //   <View className="flex-row justify-around items-center p-6">
    //     <TouchableOpacity onPress={() => handleRetakeImage()}>
    //       <MaterialCommunityIcons
    //         name="camera-retake"
    //         size={35}
    //         color="black"
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => handleSubmitRequest()}>
    //       <Ionicons name="send" size={35} color="black" />
    //     </TouchableOpacity>
    //   </View>
    // </View>

    <SafeAreaView className="flex h-full justify-between bg-white">
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[12px] h-[12px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[12px] h-[12px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
        className=""
      >
        {userImages.map((image, index) => (
          <View key={index}>
            <Image source={image} className="w-full h-full"></Image>
            {/* <Text>{guideline.title}</Text> */}
          </View>
        ))}
      </Swiper>
      <View className="flex-row justify-around items-center p-6 border">
        <TouchableOpacity
          onPress={() => handleRetakeImage()}
          className="border rounded-full p-2"
        >
          <MaterialCommunityIcons
            name="camera-retake"
            size={35}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSubmitRequest()}
          className="border rounded-full p-2"
        >
          <Ionicons name="send" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
