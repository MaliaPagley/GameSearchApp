import React from 'react';
import { View, TextInput, Pressable, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants';
import styles from '../../styles/signin.style';
import useSignIn from '../../hook/useSignin';




 function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { signIn } = useSignIn()

    const handleSignIn = () => {
      signIn(email, password);
    }

    return (
        <View style={styles.container}>
          
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
              <TouchableOpacity style={styles.signinBtn} testID='signinID' onPress={() => handleSignIn(email,password)}>
                <Text style={styles.signinText}>Sign in</Text>
              </TouchableOpacity>

              <Pressable style={styles.signupLinkBtn}onPress={() => router.replace("sign-up")}>
                <Text style={styles.signUpLinkText}>Create an account</Text>
              </Pressable>
            </View>
        </View>
    )
};
export default SignIn;