import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo à Página Inicial</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.buttonText}>Recuperação de Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Fundo cinza
  },
  header: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#333', // Cor do texto mais escura
  },
  buttonContainer: {
    width: '80%',
    maxWidth: 300, // Largura máxima para o container de botões
  },
  button: {
    backgroundColor: '#007BFF', // Cor de fundo azul
    marginBottom: 12, // Espaçamento entre os botões
    paddingHorizontal: 12, // Espaçamento horizontal
    paddingVertical: 8, // Espaçamento vertical
    borderRadius: 8, // Borda arredondada
  },
  buttonText: {
    color: '#fff', // Cor do texto branco
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
