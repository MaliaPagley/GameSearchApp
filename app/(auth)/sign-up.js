import { useState } from 'react'
import { View, TextInput, Pressable, Text, Alert } from 'react-native'
import { useRouter, Stack } from 'expo-router';
import { app, getAuth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styles from '../../styles/signup.style'
import { COLORS } from '../../constants';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);
    const db = getFirestore(app);
    const router = useRouter();

    const onHandlerSignup = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
    
            // Create a Firestore collection for the user
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                favorites: []
            });
        } catch (error) {
            console.error('Error signing up:', error.message);
    
            if (error.code === "auth/email-already-in-use") {
                Alert.alert("Error", "This email is already in use. Please use a different email address or signin.");
            } else {
                Alert.alert("Error", "An unexpected error occurred. Please try again later.");
            }
        }
    };
    

    return (
        <View style={styles.container}>
               <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.blackOnyx },
                headerShadowVisible: false,
                contentStyle: {backgroundColor: COLORS.white},
                title: '',
                headerShown: false,
            }}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTextOne}>Welcome!</Text>
                <Text style={styles.headerTextTwo}>Create your account.</Text>
            </View>

            <View style={styles.emailContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={COLORS.redDark}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.passwordContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={COLORS.redDark}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.actionContainer}>
                <Pressable style={styles.signupBtn} onPress={onHandlerSignup}>
                    <Text style={styles.signupText}>Sign up</Text>
                </Pressable>

                <Pressable style={styles.signinLinkBtn}onPress={() => router.replace("sign-in")}>
                    <Text style={styles.signinLinkText}>Already have an account?</Text>
                </Pressable>
            </View>

        </View>
    )
}