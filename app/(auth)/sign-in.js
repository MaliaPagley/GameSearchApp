import React from 'react';
import { View, TextInput, Pressable, Text } from 'react-native'
import { useState } from 'react'
import { useRouter, Stack } from 'expo-router';
import { useAuthContext } from '../../context/auth';
import { COLORS } from '../../constants';
import styles from '../../styles/signin.style';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { Alert } from 'react-native';



 function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const [error, setError] = useState(null);
    const { setUser } = useAuthContext();

    const router = useRouter();

    const handlePressIn = () => {
        setIsPressed(true);
      };
    
      const handlePressOut = () => {
        setIsPressed(false);
      };

  


  const handleSignIn = async (email, password, setUser) => {
    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response.user) {
        setUser(response.user)
      } else {
        setError("Sign-in Authentication failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Sign-in error:", error.message);

      switch (error.code) {
        case 'auth/invalid-login-credentials':
          setError('Invalid login credentials. Please check your email and password.');
          break;
        default:
          setError('An unexepected error occurred. Please try again later.')
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  if (error) {
    Alert.alert('Error', error);
    clearError()
  }

      

    return (
        <View style={styles.container}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.blackOnyx },
                    headerShadowVisible: false,
                    contentStyle: {backgroundColor: COLORS.blackNavy},
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
                <Pressable 
                    style={({ pressed }) => [
                        styles.signinBtn,{
                        opacity: pressed || isPressed ? 0.7 : 1,
                        },]}
                    onPress={() => handleSignIn(email,password,setUser)}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Text style={styles.signinText}>Sign in</Text>
                </Pressable>

                <Pressable style={styles.signupLinkBtn}onPress={() => router.replace("sign-up")}>
                    <Text style={styles.signUpLinkText}>Create an account</Text>
                </Pressable>
            </View>
        </View>
    )
};
export default SignIn;