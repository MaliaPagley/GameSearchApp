import { View, TextInput, Pressable, Text } from 'react-native'
import { useState } from 'react'
import { useRouter, Stack } from 'expo-router';
import { useAuth } from '../../context/auth';
import { COLORS } from '../../constants';
import styles from '../../styles/signin.style'
import useSignIn from '../../hook/useSignin';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPressed, setIsPressed] = useState(false);
    const { setUser } = useAuth();
    const { signIn } = useSignIn();
    const router = useRouter();

    const handlePressIn = () => {
        setIsPressed(true);
      };
    
      const handlePressOut = () => {
        setIsPressed(false);
      };

      const onHandlerSignIn = async () => {
        signIn(email, password, setUser);
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
                    onPress={onHandlerSignIn}
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