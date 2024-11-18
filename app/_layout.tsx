
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Tela Inicial',
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Tela de Detalhes',
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="[id]/index"
        options={{
          title: 'id aleatório',
          headerStyle: { backgroundColor: '#876548' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}