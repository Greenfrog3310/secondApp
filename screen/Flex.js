import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Flex = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Image style={styles.image} source={require('../assets/lru.png')} />
            </View>

            <View style={styles.section}>
                <Text style={styles.text}>
                    สมุนไพรท้องถิ่นไทเลย
                </Text>
            </View>

            <View style={styles.section}>
                <Image style={styles.coverScreenImage} source={require('../assets/ignor.jpg')} />
            </View>

            <View style={styles.screenSection}>
                <Image style={styles.image1} source={require('../assets/peeto.jpg')} />
                <Image style={styles.image2} source={require('../assets/ignor.jpg')} />
                <Image style={styles.image3} source={require('../assets/peeto.jpg')} />
            </View>

            <View style={{flex: 1, backgroundColor: '#ff1493',justifyContent:"center", alignItems:"center"}} >
                <Text style={{ fontSize: 18, color: '#f0f8ff' }}> มหาวิทยาลัยราชภัฏเลย</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ff7f50',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  coverScreenImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 100,
  },
  screenSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    marginTop: 100,
  },
  image: {
    width: 100,
    height: 130,
    marginHorizontal: 10,
  },
  image1: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  image2: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  image3: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: '#000000',
  },
});

export default Flex;
