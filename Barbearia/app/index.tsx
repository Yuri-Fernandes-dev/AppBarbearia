import { StyleSheet, Text, View, Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from "react";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Ionicons name="cut" style={styles.iconbarber} />
          <Text style={styles.cutText1}>APPBarber</Text>
        </View>

        <Pressable>
          <MaterialIcons name="menu" size={30} color="white" />
        </Pressable>
      </View>
      
      
      <View style={styles.pesquisaContainer}>

      <Text style={styles.nomeH1}>Olá, Yuri</Text>
      <Text style={styles.hora}>Sexta, 25 de Abril</Text>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: "100%",
    height: "auto",
    color: 'white',
    alignItems: 'center',
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribui os itens ao longo da linha
    alignItems: 'center', // Centraliza verticalmente os itens
    backgroundColor: '#1d1d1d',
    padding: 20,
  },
  leftContainer: {
    flexDirection: 'row', // Alinha o ícone e o texto na horizontal
    alignItems: 'center', // Centraliza verticalmente o ícone e o texto
  },
  iconbarber: {
    color: 'red',
    fontSize: 40,
    marginRight: 4, // Espaço entre o ícone e o texto
  },
  cutText1: {
    color: 'white',
    fontSize: 30,
    marginLeft: 4, // Espaço opcional entre o texto e o ícone
  },


  pesquisaContainer: {
    width: '100%'
  },
  nomeH1: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 5
  },
  hora: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10
   
  }
});
