import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useGlobalSearchParams } from 'expo-router';

export default function telaDetalhes() {
    const {id} = useGlobalSearchParams();
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Id: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
