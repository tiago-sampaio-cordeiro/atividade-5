import React from "react";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="account"
        options={{
          title: "Conta",
          headerStyle: { backgroundColor: "#589641" },
          headerTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerStyle: { backgroundColor: "#758961" },
          headerTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Usuario',
          headerStyle: { backgroundColor: '#123456' },
          headerTintColor: '#fff',
        }}
      />
    </Tabs>
  );
}
