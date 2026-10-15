import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function HeroMoviesScreen({ route, navigation }) {
  const { hero, image } = route.params || { hero: 'Héroe', image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/52651a62b72eb.jpg' };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.headerImage} />
      <Text style={styles.title}>Películas de {hero}</Text>
      <Text style={styles.subtitle}>Catálogo oficial y previsualización</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Ver Ficha y Tráiler (Detalle)" 
          color="#e50914"
          onPress={() => navigation.navigate('MovieDetail', { hero, image })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', padding: 20 },
  headerImage: { width: '100%', height: 220, borderRadius: 10, marginBottom: 20, resizeMode: 'cover' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 5, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 30, textAlign: 'center' },
  buttonContainer: { width: '100%', maxWidth: 300 }
});