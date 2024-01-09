import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { COLORS } from "../../constants";
import useSignIn from "../../hook/useSignin";
import styles from "../../styles/signin.style";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signIn, loading } = useSignIn();

  const onHandlerSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log("Sign-in failed:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTextOne}>Welcome Back</Text>
        <Text style={styles.headerTextTwo}>
          Please Sign in to your account.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={COLORS.placeHolder}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={COLORS.placeHolder}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.signinBtn}
          testID="buttonID"
          onPress={() => onHandlerSignIn()}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator testID="loadingID" color={COLORS.blackNavy} />
          ) : (
            <Text style={styles.signinText}>Sign in</Text>
          )}
        </TouchableOpacity>

        <Pressable
          style={styles.signupLinkBtn}
          testID="routeID"
          onPress={() => router.replace("sign-up")}
        >
          <Text style={styles.signUpLinkText}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
