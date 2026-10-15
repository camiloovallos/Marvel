import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HeroMoviesScreen({ route, navigation }) {
  const { hero } = route.params || { hero: 'Héroe' };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Películas de {hero}</Text>
      <Text style={styles.subtitle}>HeroMovies Screen (Catálogo)</Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Ver Ficha y Tráiler (Detalle)" 
          color="#e50914"
          onPress={() => navigation.navigate('MovieDetail', { hero })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#aaa', marginBottom: 20 },
  buttonContainer: { width: '80%' }
});