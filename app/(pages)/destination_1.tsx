import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function destination() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImg}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  containerImg: {
    width: "100%",
    height: "30%",
  },
});
