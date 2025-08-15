import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import googleLogo from '../assets/Google.png';
import facebookLogo from '../assets/Facebook.png';

export default function TelaLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>Informe seus dados de acesso</Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />
            
            <View style={styles.optionsRow}>
                <Pressable>
                    <Text style={styles.linkText}>Lembrar senha</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.linkText}>Esqueci minha senha</Text>
                </Pressable>
            </View>
            <View style={styles.buttonsRow}>
                <Pressable style={styles.accessButton}>
                    <Text style={styles.accessButtonText}>Acessar</Text>
                </Pressable>

                <Pressable style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Cadastrar</Text>
                </Pressable>
            </View>

            <Text style={styles.orText}>Ou continue com</Text>
            <View style={styles.socialRow}>
                <Pressable>
                    <Image source={googleLogo} style={styles.socialIcon} />
                </Pressable>
                <Pressable>
                    <Image source={facebookLogo} style={styles.socialIcon} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
        paddingTop: 50, // Adicione esta linha 
    },

    title: {
        fontSize: 35, fontWeight: 'bold',
        marginBottom: 4, color: '#555555'
    },
    subtitle: {
        fontSize: 14, color: '#666',
        marginBottom: 20
    },
    input: {
        borderWidth: 1, borderColor: '#ccc',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 15,
        fontSize: 16
    },

    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonsRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        gap: 10
    },

    linkText: {
        color: '#6d6d6d',
        fontWeight: '500',
        marginTop: 10
    },
    accessButton: {
        backgroundColor: '#56c67a',
        paddingVertical: 14,
        borderRadius: 6,
        marginBottom: 20,
        paddingHorizontal: 10,
        flex: 1
    },

    accessButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },

    registerButton: {
        borderWidth: 1,
        borderColor: '#56c67a',
        paddingVertical: 14,
        borderRadius: 6,
        marginBottom: 20,
        paddingHorizontal: 20,
        flex: 1
    },

    registerButtonText: {
        color: '#6d6d6d',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },

    orText: {
        textAlign: 'center',
        color: '#666',
        marginBottom: 15
    },

    socialRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },

    socialIcon: {
        width: 50,
        height: 50,
        marginTop: 10,
        resizeMode: 'contain'
    }
});