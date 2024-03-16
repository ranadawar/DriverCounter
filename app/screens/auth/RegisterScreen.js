import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobleStyles from "../../contants/GlobleStyles";
import AppForm from "../../components/form/AppForm";
import * as yup from "yup";
import AppFormField from "../../components/form/AppFormField";
import SubmitButton from "../../components/form/SubmitButton";
import { useNavigation } from "@react-navigation/native";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={GlobleStyles.screenContainer}>
      <View style={GlobleStyles.topContainer}>
        <Text style={GlobleStyles.header}>Sign Up</Text>
        <Text style={GlobleStyles.subHeaderLight}>Create Account</Text>
      </View>
      <View>
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Text style={GlobleStyles.mediumHeader}>Name</Text>
          <AppFormField name="name" placeholder="Name" />

          <Text style={GlobleStyles.mediumHeader}>Email</Text>
          <AppFormField name="email" placeholder="Email" />
          <Text style={GlobleStyles.mediumHeader}>Password</Text>
          <AppFormField name="password" placeholder="Password" isPassword />
          <Text style={GlobleStyles.mediumHeader}>Confirm Password</Text>
          <AppFormField
            name="confirmPassword"
            placeholder="Confirm Password"
            isPassword
          />

          <View style={styles.bottomButton}>
            <SubmitButton title="Sign Up" />
          </View>
          <Text style={[GlobleStyles.text, { textAlign: "center" }]}>
            Already have an account? {"  "}
            <Text
              onPress={() => navigation.navigate("login")}
              style={[GlobleStyles.textColored]}
            >
              Sign In
            </Text>
          </Text>
        </AppForm>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  bottomButton: {
    marginTop: 30,
  },
});
