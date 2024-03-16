import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../contants/theme";

const AppTextInput = ({
  icon,
  placeholder = "email",
  iconColor = COLORS.primary,
  color = COLORS.white,
  value,
  searchBtn,
  width,
  onPressIcon,
  searchIcon = "magnify",
  onChangeText,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color, width: width }]}>
      {icon && (
        <MaterialCommunityIcons name={icon} color={iconColor} size={25} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA4AB"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...otherProps}
      />
      {searchBtn && (
        <MaterialCommunityIcons
          name={searchIcon}
          color={COLORS.gray}
          size={25}
          onPress={onPressIcon}
        />
      )}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 100,
    backgroundColor: COLORS.lightBg,
    borderWidth: 1,
    borderColor: COLORS.lighter,
    overflow: "hidden",
  },
  input: {
    paddingVertical: Platform.OS === "ios" ? 17 : 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    flex: 1,
    overflow: "hidden",
    borderRadius: 100,
  },
});
