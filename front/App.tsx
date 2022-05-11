import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = (): JSX.Element => (
  <View style={styles.container}>
    <Text>Hello react-native</Text>
  </View>
);

export default App;
