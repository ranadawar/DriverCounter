import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { COLORS } from "./app/contants/theme";
import AuthNavigator from "./app/navigations/AuthNavigator";
import React, { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { LogBox } from "react-native";
import { auth } from "./firebase";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  const [user, setUser] = useState(null);
  LogBox.ignoreAllLogs();
  React.useEffect(() => {
    firebaseAuthState();
  }, []);

  const firebaseAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.bg,
    },
  };

  const [fontsLoaded] = useFonts({
    EncodeSansExtraBold: require("./assets/fonts/ExtraBold.ttf"),
    EncodeSansBold: require("./assets/fonts/Bold.ttf"),
    EncodeSansSemiBold: require("./assets/fonts/SemiBold.ttf"),
    EncodeSansMedium: require("./assets/fonts/Medium.ttf"),
    EncodeSansRegular: require("./assets/fonts/Regular.ttf"),
    EncodeSansLight: require("./assets/fonts/Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
