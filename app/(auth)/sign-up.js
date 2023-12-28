import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { COLORS } from '../../constants';
import styles from '../../styles/signup.style';
import useSignUp from '../../hook/useSignup';
import { getAuth } from '../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const router = useRouter();
  const auth = getAuth();
  const { signUp, loading, error } = useSignUp(auth);

  const onHandlerSignUp = async () => {
    try {
        await signUp(email, password, fullName);
    } catch (error) {
        console.log('Sign-up failed:', error.message)
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
        <Text style={styles.headerTextOne}>Create Account</Text>
        <Text style={styles.headerTextTwo}>Please fill in the fields.</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={COLORS.placeHolder}
          value={fullName}
          onChangeText={setFullName}
        />
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
          style={styles.signupBtn}
          testID="signinID"
          onPress={() => onHandlerSignUp()}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.blackNavy} />
          ) : (
            <Text style={styles.signupText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        <Pressable
          style={styles.signinLinkBtn}
          onPress={() => router.replace('sign-in')}
        >
          <Text style={styles.signinLinkText}>Already have an account?</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
