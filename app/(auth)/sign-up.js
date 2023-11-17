import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';
import { useState } from 'react'
import { app } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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
    
          console.warn({ response });
        } catch (error) {
          console.error('Error signing up:', error.message);
        }
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
                autoCapitalize="none"
                secureTextEntry={true}
            />
            <Button 
                title="Sign Up"
                onPress={onHandlerSignup}
            />
             <Button 
                title={"Already have an account?"}
                onPress={() => router.replace('sign-in')}
            />
        </View>
    )
}