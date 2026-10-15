import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SavedOfflineScreen() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const favKeys = keys.filter(k => k.startsWith('favorite_'));
      const items = await AsyncStorage.multiGet(favKeys);
      const parsed = items.map(([key, value]) => JSON.parse(value));
      setFavorites(parsed);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca Local (AsyncStorage)</Text>
      <Text style={styles.subtitle}>Indicador Dinámico: Modo Offline / Caché Local</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.hero}</Text>
            <Text style={styles.cardDate}>Guardado: {new Date(item.date).toLocaleDateString()}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No hay elementos guardados offline aún.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#e50914', textAlign: 'center' },
  subtitle: { fontSize: 12, color: '#4CAF50', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#1f1f1f', padding: 15, borderRadius: 8, marginBottom: 10 },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  cardDate: { color: '#aaa', fontSize: 12 },
  empty: { color: '#777', textAlign: 'center', marginTop: 40 }
});