import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/Header";
import Main from "./src/Main";
import Footer from "./src/Footer";


export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
    <Main/>      
    <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5ecfa',
    alignItems: "center",
    paddingTop: 30,
  },
});
