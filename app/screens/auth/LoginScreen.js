import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobleStyles from "../../contants/GlobleStyles";
import AppForm from "../../components/form/AppForm";
import * as yup from "yup";
import AppFormField from "../../components/form/AppFormField";
import AppButton from "../../components/AppButton";
import SubmitButton from "../../components/form/SubmitButton";
import { useNavigation } from "@react-navigation/native";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobleStyles.screenContainer}>
      <View style={GlobleStyles.topContainer}>
        <Text style={GlobleStyles.header}>Sign In</Text>
        <Text style={GlobleStyles.subHeaderLight}>Welcome Back</Text>
      </View>
      <View>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Text style={GlobleStyles.mediumHeader}>Email</Text>
          <AppFormField name="email" placeholder="Email" />
          <Text style={GlobleStyles.mediumHeader}>Password</Text>
          <AppFormField name="password" placeholder="Password" isPassword />
          <Text style={[GlobleStyles.linkText, { textAlign: "right" }]}>
            Forgot Password?
          </Text>
          <View style={styles.bottomButton}>
            <SubmitButton title="Sign In" />
          </View>
          <Text style={[GlobleStyles.text, { textAlign: "center" }]}>
            Don't have an account? {"  "}
            <Text
              onPress={() => navigation.navigate("register")}
              style={[GlobleStyles.textColored]}
            >
              Register
            </Text>
          </Text>
        </AppForm>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bottomButton: {
    marginTop: 30,
  },
});
