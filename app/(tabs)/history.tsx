import { Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function History() {
  return (
    <View style={styles.container}>
      <Link href="/product/">Produto</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
