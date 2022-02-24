import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NetflixCard from './components/NetflixCard';

export default function App() {
  return (
    <View style={styles.container}>
     <NetflixCard/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
