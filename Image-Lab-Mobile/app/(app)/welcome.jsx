import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { guidelines } from "@/constants";
import { Image } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomWelcomeButton from "../../components/CustomWelcomeButton";

export default function Welcome() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === guidelines.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(app)/CameraRoom");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="font-SpaceMonoBoldItalic">Skip</Text>
      </TouchableOpacity>
      <View className="pl-6 pr-6">
        <Text style={{ fontSize: hp(3.2) }} className="font-medium">
          Upload a photo of your Face
        </Text>
        <Text style={{ fontSize: hp(2) }} className="pt-3 pb-3">
          Follow these guidelines to take the perfect image
        </Text>
      </View>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF]" />}
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {guidelines.map((guideline, index) => (
          <View className="flex items-center justify-center" key={index}>
            <View className="flex items-center justify-center w-full mt-10">
              <Image
                source={guideline.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              ></Image>
              <Text className="font-SpaceMonoBold">{guideline.title}</Text>
              {/* <Text className="font-SpaceMonoRegular">
                {guideline.overview}
              </Text> */}
            </View>
            {/* {index === guidelines.length - 1 ? (
              <TouchableOpacity>
                <View
                  style={{ width: wp(80) }}
                  className="flex-row justify-center items-center p-4 ml-8 mr-8 mt-4 mb-4 border rounded-full"
                >
                  <Fontisto name="camera" size={24} color="black" />
                  <Text className="font-medium ml-2">
                    {" "}
                    Open camera and take picture
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  swiperRef.current = index;
                }}
              >
                <View
                  style={{ width: wp(80) }}
                  className="flex-row justify-center items-center bg-indigo-400 p-4 ml-8 mr-8 mt-4 mb-4 border rounded-full"
                >
                  <Text className="font-medium mr-2">Continue </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </View>
              </TouchableOpacity>
            )} */}
          </View>
        ))}
      </Swiper>
      <CustomWelcomeButton
        title={isLastSlide ? "Open camera and take picture" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(app)/CameraRoom")
            : swiperRef.current?.scrollBy(1)
        }
        className={`${isLastSlide && "bg-indigo-400"}`}
        IconLeft={() =>
          isLastSlide && <Fontisto name="camera" size={24} color="black" />
        }
        IconRight={() =>
          !isLastSlide && (
            <AntDesign name="arrowright" size={24} color="black" />
          )
        }
      />
    </SafeAreaView>
  );
}
