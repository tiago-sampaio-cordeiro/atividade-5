import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

export default function index() {
  const id = `${Math.floor(Math.random() * 10)}`;
  const router = useRouter();

  const navigateToDetails = () => {
    router.push("/details");
  };

  return (
    <View style={styles.container}>
      <Text>Seja bem-vindo</Text>
      <Link href={`/${id}`} style={styles.link}>
        Go to Details with Random ID: {id}
      </Link>
      <Link href={'/users'} style = {styles.link} >
        Usuario
      </Link>
      <Button title=" Ir para Detalhes" onPress={navigateToDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 30,
  },
  link: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
    margin: 50,
  },
});
