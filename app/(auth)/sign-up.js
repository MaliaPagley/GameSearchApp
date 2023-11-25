import { useState } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import { useRouter, Stack } from 'expo-router';
import { useAuth } from '../../context/auth';
import { COLORS } from '../../constants';
import styles from '../../styles/signup.style'
import useSignUp from '../../hook/useSignup';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const { setUser } = useAuth();
    const { signUp } = useSignUp();
    const router = useRouter();

    const handlePressIn = () => {
        setIsPressed(true)
    }
    const handlePressOut = () => {
        setIsPressed(false)
    }

    const onHandlerSignUp = async () => {
        signUp(email, password, setUser);
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
                <Pressable 
                    style={({ pressed }) => [
                        styles.signupBtn,{
                            opacity: pressed || isPressed ? 0.7 : 1,
                        },]} 
                    onPress={onHandlerSignUp}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                >
                    <Text style={styles.signupText}>Sign up</Text>
                </Pressable>

                <Pressable style={styles.signinLinkBtn}onPress={() => router.replace("sign-in")}>
                    <Text style={styles.signinLinkText}>Already have an account?</Text>
                </Pressable>
            </View>

        </View>
    )
};