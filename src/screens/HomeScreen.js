import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { plans } from '../data/workouts';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.logo}>CoreForge</Text>
        <Text style={styles.tagline}>Train smarter. Forge stronger.</Text>

        <Text style={styles.section}>Choose Your Plan</Text>
        {Object.entries(plans).map(([key, plan]) => (
          <TouchableOpacity
            key={key}
            style={styles.card}
            onPress={() => navigation.navigate('Workout', { plan: key })}
          >
            <Text style={styles.cardTitle}>{plan.name}</Text>
            <Text style={styles.cardDesc}>{plan.description}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.proBtn} onPress={() => navigation.navigate('Paywall')}>
          <Text style={styles.proText}>Unlock Pro — 7 Days Free</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  logo: { color: '#fff', fontSize: 36, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 20 },
  tagline: { color: '#a1a1aa', fontSize: 16, paddingHorizontal: 20, marginBottom: 24 },
  section: { color: '#fff', fontSize: 20, fontWeight: '600', paddingHorizontal: 20, marginBottom: 12 },
  card: { backgroundColor: '#18181b', marginHorizontal: 20, marginBottom: 12, padding: 16, borderRadius: 16 },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  cardDesc: { color: '#a1a1aa', marginTop: 4 },
  proBtn: { backgroundColor: '#2563eb', margin: 20, padding: 16, borderRadius: 16, alignItems: 'center' },
  proText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
