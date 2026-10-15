import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import HeroMoviesScreen from './src/screens/HeroMoviesScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';
import SavedOfflineScreen from './src/screens/SavedOfflineScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'MarvelVerse - Héroes' }} />
      <Stack.Screen name="HeroMovies" component={HeroMoviesScreen} options={{ title: 'Catálogo de Películas' }} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ title: 'Ficha y Tráiler' }} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#1f1f1f' }, tabBarActiveTintColor: '#e50914', tabBarInactiveTintColor: '#aaa', headerStyle: { backgroundColor: '#1f1f1f' }, headerTintColor: '#fff' }}>
      <Tab.Screen name="Explorar" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Guardados Offline" component={SavedOfflineScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}