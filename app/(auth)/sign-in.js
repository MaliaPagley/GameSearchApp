import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { COLORS } from '../../constants';
import styles from '../../styles/signin.style';
import useSignIn from '../../hook/useSignin';
import { getAuth } from '../../firebase';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const auth = getAuth();
  const { signIn, loading, error } = useSignIn(auth);

  const onHandlerSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error) {
      console.log('Sign-in failed:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.blackOnyx },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.blackNavy },
          title: '',
          headerShown: false,
        }}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.headerTextOne}>Welcome Back</Text>
        <Text style={styles.headerTextTwo}>Please Sign in to your account.</Text>
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
          secureTextEntry={true}
        />
      </View>

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.signinBtn}
          testID="signinID"
          onPress={() => onHandlerSignIn()}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.blackNavy} />
          ) : (
            <Text style={styles.signinText}>Sign in</Text>
          )}
        </TouchableOpacity>

        <Pressable
          style={styles.signupLinkBtn}
          onPress={() => router.replace('sign-up')}
        >
          <Text style={styles.signUpLinkText}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
