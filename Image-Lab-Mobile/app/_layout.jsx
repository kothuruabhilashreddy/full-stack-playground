import React, { useContext } from "react";
import { useEffect } from "react";
import { SplashScreen, Stack, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import { createContext, useState } from "react";
import { onAuthStateChanged } from "@react-native-firebase/auth";
import { auth } from "./(auth)/config";
import { fetchUserData } from "./(auth)/auth";
import { MenuProvider } from "react-native-popup-menu";

SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext();

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }
  return value;
};

export default function RootLayout() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  const segments = useSegments();
  const router = useRouter();

  const [loaded] = useFonts({
    "SpaceMono-Bold": require("../assets/fonts/SpaceMono-Bold.ttf"),
    "SpaceMono-BoldItalic": require("../assets/fonts/SpaceMono-BoldItalic.ttf"),
    "SpaceMono-Italic": require("../assets/fonts/SpaceMono-Italic.ttf"),
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // useEffect(() => {
  //   if (loaded && typeof isAuthenticated == "undefined") return;
  //   const inApp = segments[0] === "(app)";
  //   if (isAuthenticated && !inApp) {
  //     router.replace("home");
  //   } else if (isAuthenticated == false) {
  //     router.replace("signIn");
  //   }
  // }, [isAuthenticated, loaded]);

  useEffect(() => {
    if (loaded && typeof isAuthenticated !== "undefined") {
      const inApp = segments[0] === "(app)";
      if (isAuthenticated && !inApp) {
        router.replace("home");
      } else if (isAuthenticated === false) {
        router.replace("signIn");
      }
    }
  }, [isAuthenticated, loaded]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        const userData = await fetchUserData(user.uid);
        setUser({
          ...user,
          firstName: userData.data.firstName,
          lastName: userData.data.lastName,
          role: userData.data.role,
          imageUrl: userData.data.imageUrl,
        });
      } else {
        setIsAuthenticated(false);
      }
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;
  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      <MenuProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </MenuProvider>
    </AuthContext.Provider>
  );
}
