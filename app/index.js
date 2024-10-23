import { View, ActivityIndicator, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

// export default function StartPage() {
//   return (
//     <View className="flex-1 justify-center item-center">
//       <ActivityIndicator size="large" color="gray" />
//     </View>
//   );
// }

export default function Home() {
  // return <Redirect href="/(auth)/welcome" />;
  // return <Redirect href="/(auth)/signIn" />;
  return <Redirect href="/(app)/home" />;
}
