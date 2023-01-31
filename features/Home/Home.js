import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Button, Text, TextInput, FlatList} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(false);
 const list = [
  {key: 'Mot'},
  {key: 'Hai'},
  {key: 'ba'},
  {key: 'Bon'},
  {key: 'Nam'},
  {key: 'Sau'},
  {key: 'Bay'},
  {key: 'Tam'},
  {key: 'Chin'},
  {key: 'Muoi'},
]
  return (
    <View style={styles.container}>
        <View style={styles.container}>
          <Text>Họ tên:</Text>
          <TextInput style={styles.inputView}
          placeholder="Nhập họ tên"/>
            
          <Text>Mã sinh viên:</Text>
          <TextInput style={styles.inputView} placeholder="Nhập mã sinh viên"/>

          <Button
            title="Thêm sinh viên"
            onPress={() => navigation.navigate('Details')}
          />

          <Button
            color="#f194ff"
            title={!hide ? 'Hiển thị danh sách sinh viên' : "An danh sach"}
            onPress={() => {
              
              setHide(!hide)
              if (hide) {
                setData([])
              } else {
                setData(list);
              }
            }}
          />
          <FlatList
            data={data}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
          

          <StatusBar style="auto" />
        </View>
    </View>
  );
}


export default Home;
