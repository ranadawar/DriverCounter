import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../contants/theme";

const ErrorText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.light,
    color: COLORS.danger,
    fontSize: 10,
    marginBottom: 10,
  },
});
