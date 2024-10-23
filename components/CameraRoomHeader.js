import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CameraRoomHeader() {
  const item = useLocalSearchParams();

  const onBackButtonPressed = () => {
    router.back();
  };
  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerLeft: () => (
          <View className="flex-row items-center gap-4">
            <TouchableOpacity onPress={onBackButtonPressed}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ),
      }}
      className="bg-indigo-400"
    />

    // <Stack.Screen options={{ headerShown: false }} />

    // <View className="flex-1 bg-white">
    //     <StatusBar style='dark' />
    //     <FontAwesome name="camera" size={24} color="black" />
    // </View>
  );
}
