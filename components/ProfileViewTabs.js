import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileViewTabs = (tabelement) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome name={tabelement.icon} size={20} color="#9A9A9F" />
        <Text style={styles.text}>{tabelement.tabs}</Text>
        <FontAwesome name="angle-right" size={30} style={styles.arrowkey}/>
      </View>
    </TouchableOpacity>
  );
};
export default ProfileViewTabs;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: 10,
        borderRadius: 10,
        width:'100%',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 13,
        borderRadius: 5,
        width: '98%',
    },
    text: {
        color: '#9A9A9',
        fontSize: 18,
        fontFamily: 'poppins-regular',
        letterSpacing: 2,
        marginLeft: 20
        
    },
    arrowkey: {
        fontWeight: 'bold',
        color: '#9F9A9F',
        fontSize: 20,
        fontFamily: 'montserrat',
        marginRight: 10,
        direction: 'rtl',
        marginLeft: 'auto'
    },
});
