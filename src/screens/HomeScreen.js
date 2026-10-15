import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

const characters = [
  { id: '1', name: 'Spider-Man', role: 'Amigable vecino' },
  { id: '2', name: 'Iron Man', role: 'Genio y filántropo' },
  { id: '3', name: 'Thor', role: 'Dios del Trueno' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MarvelVerse Mobile</Text>
      <Text style={styles.subtitle}>Explora Personajes (HomeScreen)</Text>
      
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('HeroMovies', { hero: item.name })}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardRole}>{item.role}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#e50914', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#1f1f1f', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#333' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  cardRole: { fontSize: 14, color: '#aaa' },
});