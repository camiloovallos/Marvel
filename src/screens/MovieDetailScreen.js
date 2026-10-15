import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MovieDetailScreen({ route }) {
  const { hero, image } = route.params || { hero: 'Película', image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/52651a62b72eb.jpg' };

  const handleSaveOffline = async () => {
    try {
      await AsyncStorage.setItem(`favorite_${hero}`, JSON.stringify({ hero, image, date: new Date() }));
      Alert.alert('Modo Offline', `¡${hero} guardado exitosamente en el almacenamiento local (AsyncStorage)!`);
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar localmente.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.heroPoster} />
      <Text style={styles.title}>Ficha Técnica: {hero}</Text>
      
      <View style={styles.videoBox}>
        <Text style={styles.videoText}>▶ [ Reproductor Multimedia / Tráiler Activo ]</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Guardar para Modo Offline" color="#e50914" onPress={handleSaveOffline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', padding: 20 },
  heroPoster: { width: 120, height: 120, borderRadius: 60, marginBottom: 15, borderWidth: 2, borderColor: '#e50914', resizeMode: 'cover' },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 15, textAlign: 'center' },
  videoBox: { width: '100%', maxWidth: 350, height: 160, backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: '#333', borderRadius: 8 },
  videoText: { color: '#aaa', fontWeight: 'bold' },
  buttonContainer: { width: '100%', maxWidth: 300 }
});