import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function PaywallScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Unlock CoreForge Pro</Text>
      <Text style={styles.subtitle}>Go beyond the basics and unlock everything.</Text>

      <View style={styles.offer}>
        <Text style={styles.trial}>★ 7-DAY FREE TRIAL</Text>
        <Text style={styles.price}>$29.99 /year</Text>
        <Text style={styles.note}>Best value – cancel anytime</Text>
      </View>

      <View style={styles.benefits}>
        <Text style={styles.benefit}>• All 30-Day Plans</Text>
        <Text style={styles.benefit}>• Video Guides</Text>
        <Text style={styles.benefit}>• Custom Generator</Text>
        <Text style={styles.benefit}>• Progress Tracking</Text>
      </View>

      <TouchableOpacity style={styles.cta}>
        <Text style={styles.ctaText}>Continue with 7-Day Free Trial</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>Secure payment • Cancel anytime</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  close: { alignSelf: 'flex-end', padding: 8 },
  closeText: { fontSize: 24, color: '#000' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  subtitle: { textAlign: 'center', color: '#666', marginTop: 8 },
  offer: { backgroundColor: '#f0f9ff', borderRadius: 16, padding: 20, marginVertical: 24, alignItems: 'center' },
  trial: { color: '#2563eb', fontWeight: '600' },
  price: { fontSize: 36, fontWeight: 'bold', marginTop: 4 },
  note: { color: '#666', marginTop: 4 },
  benefits: { marginBottom: 24 },
  benefit: { fontSize: 16, marginVertical: 6 },
  cta: { backgroundColor: '#2563eb', padding: 18, borderRadius: 16, alignItems: 'center' },
  ctaText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  footer: { textAlign: 'center', color: '#666', marginTop: 12 },
});
