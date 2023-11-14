import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useAuth } from '../../context/auth';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: "#8EA604",
        borderBottomWidth: 1,
        width: 200,
        paddingVertical: 10,
        fontSize: 14,
        fontWeight: "500",
        marginVertical: 10,
    }
})

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { setUser } = useAuth();

    const onHandlerSignIn = async () => {
        const response = await signInWithEmailAndPassword(auth, email, password);

      if(!response?.user) {
        Alert.alert("Error", "Something went wrong")
      }
      setUser(response.user)
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="x@domain.com"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
             style={styles.input}
             placeholder="******"
             value={password}
             onChangeText={setPassword}
            />
            <Button 
                title="Sign In"
                color="#8B85C1"
                onPress={onHandlerSignIn}
            />
            <Button 
                title="Create an account."
                onPress={() => router.replace("sign-up")}
            />
        </View>
    )
}