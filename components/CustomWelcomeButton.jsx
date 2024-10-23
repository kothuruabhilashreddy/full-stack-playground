import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CustomWelcomeButton({
  onPress,
  title,
  className,
  IconLeft,
  IconRight,
  ...props
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{ width: wp(80) }}
        className={`flex-row justify-center items-center p-4 ml-8 mr-8 mt-4 mb-4 border rounded-full ${className}`}
      >
        {IconLeft && <IconLeft />}
        {/* <Fontisto name="camera" size={24} color="black" /> */}
        <Text className="font-medium ml-2"> {title}</Text>
        {IconRight && <IconRight />}
      </View>
    </TouchableOpacity>
  );
}
