import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recuperação de Senha</Text>
      <Text style={styles.description}>
        Insira seu endereço de e-mail para redefinir sua senha.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Navegar para a página de login
      >
        <Text style={styles.buttonText}>Enviar Email de Recuperação</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    marginBottom: 12,
  },
  linkText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
