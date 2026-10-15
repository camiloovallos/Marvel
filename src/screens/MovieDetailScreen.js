import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MovieDetailScreen({ route }) {
  const { hero } = route.params || { hero: 'Película' };

  const handleSaveOffline = async () => {
    try {
      await AsyncStorage.setItem(`favorite_${hero}`, JSON.stringify({ hero, date: new Date() }));
      Alert.alert('Modo Offline', `¡${hero} guardado en el almacenamiento local (AsyncStorage)!`);
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar localmente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ficha Técnica: {hero}</Text>
      <Text style={styles.subtitle}>MovieDetailScreen (Reproductor y Guardado)</Text>
      
      <View style={styles.videoBox}>
        <Text style={styles.videoText}>[ Reproductor Multimedia / Tráiler ]</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Guardar para Modo Offline" color="#e50914" onPress={handleSaveOffline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  subtitle: { fontSize: 12, color: '#aaa', marginBottom: 20 },
  videoBox: { width: '100Kr' || '100%', height: 200, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#333', borderRadius: 8 },
  videoText: { color: '#777' },
  buttonContainer: { width: '80%' }
});