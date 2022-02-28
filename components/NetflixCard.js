import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix Card </Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={require("../assets/netflix.jpg")}
        />

        <View style={styles.poster__info}>
          <Text style={styles.poster__title}> All Of Us Dead </Text>
          <Text style={styles.poster__text}>
            Find out why the All of us dead. When an island populated by happy,
            flightless birds is visited by mysterious green piggies, it's up to
            three unlikely outcasts - Red, Chuck and Bomb{" "}
          </Text>
        </View>
        <View style={{marginBottom:10,color:"#6b0000"}}>
        <Button
        color="#c70202"
          title="Watch Now"
          onPress={() => Linking.openURL("https://www.netflix.com/browse")}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
  },
  poster: {
    width: 300,
    // borderWidth: 1,
    alignItems: "center",
  },
  poster__info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster__text: {
    color: "#330f0f",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius:20
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
    
    
   
  },
});

export default NetflixCard; 
 
