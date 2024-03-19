import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import GlobleStyles from "../../contants/GlobleStyles";
import { COLORS } from "../../contants/theme";

const LandingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={GlobleStyles.topContainer}>
        <Text style={GlobleStyles.header}>Welcome to Driver Count</Text>
        <Text style={GlobleStyles.subHeader}>
          Choose how you want to continue
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="I'm a New User"
          backgroundColor={COLORS.primary}
          onPress={() => navigation.navigate("register")}
        />
        <AppButton
          title="Sign In"
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
});
