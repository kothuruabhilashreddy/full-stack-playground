import { Text, View, Platform, Alert } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { blurhash } from "../utils/common";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { MenuItems } from "./CustomMenuItems";
import { useAuth } from "../app/_layout";
import { logout } from "../app/(auth)/auth";

const ios = Platform.OS == "ios";

export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    const response = await logout();
    setLoading(false);
    if (!response.success) {
      Alert.alert("Log out failed", response.msg);
    }
  };

  return (
    <View>
      {/* rounded-b-3xl */}
      <View
        style={{
          paddingTop: ios ? top : top + 10,
          paddingBottom: ios ? top + 20 : top + 30,
        }}
        className="flex-row justify-between px-5 bg-indigo-400 pb-6  shadow"
      >
        <View style={{ paddingTop: ios ? top : top + 10 }}>
          <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
            Hey {user?.lastName}
          </Text>
          <Text style={{ fontSize: hp(3) }} className="font-medium">
            What's going on today?
          </Text>
        </View>
        <View>
          <Menu>
            <MenuTrigger>
              <Image
                style={{
                  height: hp(4.3),
                  aspectRatio: 1,
                  borderWidth: 2,
                  borderRadius: 100,
                  borderColor: "black",
                }}
                source={user?.imageUrl}
                placeholder={{ blurhash }}
                transition={100}
              />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption
                onSelect={() => alert(`Profile Selected`)}
                className="border-b-neutral-200"
              >
                <View className="px-4 py-2 flex-row justify-between items-center">
                  <Text>Profile</Text>
                </View>
              </MenuOption>
              {/* <View className="border mx-2"></View> */}
              <MenuOption onSelect={() => handleSignOut()}>
                <View className="px-4 py-2 flex-row justify-between items-center">
                  <Text style={{ color: "red" }}>Logout</Text>
                </View>
              </MenuOption>
              {/* <MenuItems /> */}
            </MenuOptions>
          </Menu>
        </View>
      </View>
    </View>
  );
}
