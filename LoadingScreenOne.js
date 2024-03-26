import { Button } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function LoadingScreenOne({route, navigation }) {

    const [index, setIndex] = React.useState(0);
    // useEffect(()=> =()=>navigation.navigate('Intro'))
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

        <Image
          style={{width: 138.58, height: 230.91, left: 0, top: 150, position: 'absolute', borderRadius: 10}} 
          source={{
            uri: 'https://saudiagroup.com/pub/media/catalog/product/cache/2a0b860d8a20befcb7fa9964e6991af0/1/3/1353.jpg',
          }}
        />
        <Image
          style={{width: 138.58, height: 238.47, left: 148.21, top: 160.04, position: 'absolute', borderRadius: 10}}
          source={{
            uri: 'https://m.thepeninsulaqatar.com/get/maximage/20190418_1555564706-222627.jpeg?1635250003',
          }}
        />
        <Image
           style={{width: 138.58, height: 230.91, left: 296.42, top: 150, position: 'absolute', borderRadius: 10}}
          source={{
            uri: 'https://files.qatarliving.com/post/2022/03/17/rayan-qatar-living-water.jpeg',
          }}
        />
        <Image
            style={{width: 138.58, height: 279.69, left: -0, top: 400.31, position: 'absolute', borderRadius: 10}}
          source={{
            uri: 'https://www.qbake.qa/wp-content/uploads/2018/05/pr-4.jpg',
          }}
        />
        <Image
          style={{width: 138.58, height: 270, left: 148.21, top: 410.53, position: 'absolute', borderRadius: 10}}
          source={{
            uri: 'https://files.qatarliving.com/post/2022/03/17/Ddpv4qSVQAI70W9.jpeg',
          }}
        />
        <Image
          style={{width: 138.58, height: 279.69, left: 296.42, top: 400.31, position: 'absolute', borderRadius: 10}}
          source={{
            uri: 'https://www.billjumla.com/cdn/shop/products/BIJ114HOF00226_1000x.jpg?v=1596713800',
          }}
        />
          
      </View>
      <Text style={styles.text}>
        Alternatives to Boycott Products?
      </Text>
      
      <Button
                title="Light"
                buttonStyle={{
                    backgroundColor: 'white', // Background color of the button
                    borderRadius: 3,
                }}
                titleStyle={{
                    color: '#78081C', // Text color inside the button
                }}
                onPress={() => navigation.replace('Landing')}
                style={styles.btn}> Next </Button>
      </View>
      
      

  );
}

const styles = StyleSheet.create({
 
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#78081C'
  },
  container:{
    flex: 1,
    backgroundColor: '#78081C',
  },
  text: {
    width: 335,
    left: 50,
    top: 65,
    position: 'absolute',
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn:{
    width: 200,
    left: 115,
    position: 'relative',
    color: 'black',
    marginBottom: 150
  }
});
