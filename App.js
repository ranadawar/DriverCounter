import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { COLORS } from "./app/contants/theme";
import AuthNavigator from "./app/navigations/AuthNavigator";
import { useEffect, useState } from "react";

import auth from "@react-native-firebase/auth";

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.bg,
    },
  };

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

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
      {/* <AppNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
