import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';

const characters = [
  { id: '1', name: 'Spider-Man', role: 'Amigable vecino', image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/52651a62b72eb.jpg' },
  { id: '2', name: 'Iron Man', role: 'Genio y filántropo', image: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg' },
  { id: '3', name: 'Thor', role: 'Dios del Trueno', image: 'https://i.annihil.us/u/prod/marvel/i/mg/d/03/52602f91f9bb3.jpg' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Universo Marvel</Text>
      <Text style={styles.subtitle}>Selecciona un personaje para explorar</Text>
      
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('HeroMovies', { hero: item.name, image: item.image })}
          >
            <Image source={{ uri: item.image }} style={styles.heroImage} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardRole}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  listContainer: { alignItems: 'center', paddingBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#e50914', textAlign: 'center', marginTop: 10 },
  subtitle: { fontSize: 13, color: '#aaa', textAlign: 'center', marginBottom: 20 },
  card: { width: '100%', maxWidth: 350, backgroundColor: '#1f1f1f', borderRadius: 12, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: '#333', alignItems: 'center' },
  heroImage: { width: '100%', height: 180, resizeMode: 'cover' },
  textContainer: { padding: 15, width: '100%', alignItems: 'center' },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  cardRole: { fontSize: 14, color: '#aaa', textAlign: 'center' },
});