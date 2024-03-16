import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../contants/theme";

const AppButton = ({
  onPress,
  title,
  style,
  titleStyle,
  color = COLORS.primary,
}) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainer, style, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 13,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
