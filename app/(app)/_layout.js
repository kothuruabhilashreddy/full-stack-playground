import React from "react";
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import CameraRoomHeader from "../../components/CameraRoomHeader";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="CameraScreen"
        options={{
          header: () => <CameraRoomHeader />,
        }}
      /> */}
    </Stack>
  );
}
