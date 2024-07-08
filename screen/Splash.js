import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Splash = () => {
    return (
        <View
          style={{
            display: 'flex',
            flex: 1,
            flexDirection:'column',
                }}>
          <View style={{flex: 1, backgroundColor: '#f0f8ff',justifyContent:"center", alignItems:"center"}} >
          <Text style={{ fontSize: 18,
                         alignItems:"center",
                         color:"black"}}> 
            ยินดีตอนรับ</Text>
        </View>
        <View style={{flex: 5, backgroundColor: '#00bfff',alignItems:"center"}}>
            <Image
                source={{uri: './assets/lru.png'}}
                style={{width: 120, height: 160, objectFit:"cover", alignItems:"flex-end",justifyContent:"center"}}
                />
                <br/>
            <Text style={{fontSize: 18,
                         alignItems:"center",
                         color:"#f0f8ff",
                }}> 
                สมุนไพรท้องถิ่นไทเลย</Text>
                <br/>
                <Image
                source={{uri: './assets/loei.png'}}
                style={{width: 300, height: 200,objectFit:"cover", alignItems:"flex-end",justifyContent:"center"}}
                />
            </View>
          <View style={{flex: 1, backgroundColor: '#ff1493',justifyContent:"center", alignItems:"center"}} >
          <Text style={{fontSize: 18, color: '#f0f8ff'}}> คณะวิทยาศาสตร์และเทคโนโลยี</Text>
          <Text style={{fontSize: 15, color: '#f0f8ff'}}> สาขาเทคโนโลยีสาระสนเทศ</Text>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
export default Splash