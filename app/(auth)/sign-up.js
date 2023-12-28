import { useState } from 'react'
import { View, TextInput, Pressable, Text } from 'react-native'
import { useRouter, Stack } from 'expo-router';
import { useAuthContext } from '../../context/auth';
import { COLORS } from '../../constants';
import styles from '../../styles/signup.style'
import useSignUp from '../../hook/useSignup';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const { setUser } = useAuthContext();
    const { signUp } = useSignUp();
    const router = useRouter();

    const handlePressIn = () => {
        setIsPressed(true)
    }
    const handlePressOut = () => {
        setIsPressed(false)
    }

    const onHandlerSignUp = async () => {
        signUp(email, password, setUser, fullName);
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