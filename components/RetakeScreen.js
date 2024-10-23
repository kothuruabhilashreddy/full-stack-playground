import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";

const sendPhotoToBackend = async (photo) => {
  console.log("photo");
};

export default function RetakeScreen({ photo, setPhoto }) {
  return (
    <View className="flex-1 justify-center">
      <View className="flex-1">
        <Image
          style={{ aspectRatio: 1, borderWidth: 2, borderColor: "black" }}
          source={photo}
          transition={100}
        />
      </View>
      <View className="flex-row justify-around items-center p-6">
        <TouchableOpacity onPress={() => setPhoto(null)}>
          <MaterialCommunityIcons
            name="camera-retake"
            size={35}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => sendPhotoToBackend(photo)}>
          <Ionicons name="send" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
