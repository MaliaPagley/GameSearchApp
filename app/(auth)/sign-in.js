import { View, TextInput, Pressable, Text, Alert} from 'react-native'
import { useState } from 'react'
import { useRouter, Stack } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { app, getAuth } from '../../firebase'
import { useAuth } from '../../context/auth';
import { COLORS } from '../../constants';
import styles from '../../styles/signin.style'



export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth(app);
    const router = useRouter();
    const { setUser } = useAuth();


    const onHandlerSignIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
    
            if (response.user) {
                setUser(response.user);
            } else {
                Alert.alert("Error", "Authentication failed. Please check your credentials and try again.");
            }
        } catch (error) {
            console.error("Sign-in error:", error.message);

            if (error.code === "auth/invalid-login-credentials") {
                Alert.alert("Error", "Invalid login credentials. Please check your email and password.");
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
                contentStyle: {backgroundColor: COLORS.blackNavy},
                title: '',
                headerShown: false,
            }}
            />
            <View style={styles.headerContainer}>
                <Text style={styles.headerTextOne}>Welcome!</Text>
                <Text style={styles.headerTextTwo}>Please Sign in to your account.</Text>
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
                <Pressable style={styles.signinBtn} onPress={onHandlerSignIn}>
                    <Text style={styles.signinText}>Sign in</Text>
                </Pressable>

                <Pressable style={styles.signupLinkBtn}onPress={() => router.replace("sign-up")}>
                    <Text style={styles.signUpLinkText}>Create an account</Text>
                </Pressable>
            </View>
        </View>
    )
}