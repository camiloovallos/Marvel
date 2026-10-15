import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import HeroMoviesScreen from './src/screens/HeroMoviesScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import SavedOfflineScreen from './src/screens/SavedOfflineScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'MarvelVerse' }} />
      <Stack.Screen name="HeroMovies" component={HeroMoviesScreen} options={{ title: 'Películas' }} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ title: 'Detalle Multimedia' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#1f1f1f' }, tabBarActiveTintColor: '#e50914', tabBarInactiveTintColor: '#aaa', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff' }}>
        <Tab.Screen name="Explorar" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Guardados Offline" component={SavedOfflineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}