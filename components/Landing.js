import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Landing = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tap to find the alternatives</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../assets/milk.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.categoryTitle}>Dairies</Text>

      <View style={styles.card}>
        <Image
          source={require('../assets/juice.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.categoryTitle}>Beverages</Text>

      <View style={styles.card}>
        <Image
          source={require('../assets/chips.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.categoryTitle}>Food Products</Text>

    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#97262B'
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 150,
    width: 300,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#97262B'
  },
  image: {
    width: 150,
    height: 130,
  },
});
