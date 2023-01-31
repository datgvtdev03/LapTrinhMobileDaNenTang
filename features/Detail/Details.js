import React from 'react';
import {View, StyleSheet, Text, Button, TextInput, Alert} from 'react-native';
import { styles } from './styles';

const Details = ({navigation}) => {
  return (
      <View>

        <Text>Họ tên:</Text>
          <TextInput style={styles.inputView}
          placeholder="Nhập họ tên"/>
            
          <Text>Mã sinh viên:</Text>
          <TextInput style={styles.inputView} placeholder="Nhập mã sinh viên"/>

          <Text>Email sinh viên:</Text>
          <TextInput style={styles.inputView} placeholder="Nhập email sinh viên"/>

          <Button
            title="Huỷ"
            onPress={() => navigation.navigate('Home')}
          />


        <Button
           title='Luu' onPress={() => Alert.alert('Da luu thanh cong!')}
        />
      </View>
  );
}

export default Details;
