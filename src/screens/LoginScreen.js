import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Aviso', 'Por favor ingresa tus credenciales (Simulación Spring Boot/PostgreSQL)');
      return;
    }
    // Si hay datos, simulamos autenticación exitosa y pasamos a la pantalla principal
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MARVELVERSE</Text>
      <Text style={styles.subtitle}>Módulo de Autenticación (JWT / PostgreSQL)</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#e50914', marginBottom: 5, letterSpacing: 2 },
  subtitle: { fontSize: 12, color: '#aaa', marginBottom: 30, textAlign: 'center' },
  input: { width: '100%', maxWidth: 350, backgroundColor: '#1f1f1f', color: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  button: { width: '100%', maxWidth: 350, backgroundColor: '#e50914', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});