import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from "react";


export default function Page() {
  return (
    <View style={styles.container}>

      {/*Inicio e menu Hamburger */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Ionicons name="cut" style={styles.iconbarber} />
          <Text style={styles.cutText1}>APPBarber</Text>
        </View>

        <Pressable>
          <MaterialIcons name="menu" size={30} color="white" />
        </Pressable>
      </View>

      {/* Input e btn de pesquisas */}
      <View style={styles.pesquisaContainer}>

        <Text style={styles.nomeH1}>Olá, Yuri</Text>
        <Text style={styles.hora}>Sexta, 25 de Abril</Text>

      </View>

      <View style={styles.containerInput}>
        <TextInput placeholder="Faça sua busca...." placeholderTextColor="" style={styles.pesquisaInput} />
        <Ionicons name="search" size={30} color="white" style={styles.btnpesquisa} />
      </View>


      {/* Categorias */}

      <View style={styles.categoriasContainer}>

        <View style={styles.categorias}>
          <Ionicons name="cut" size={30} color="#b31010ff" />
          <Text style={styles.categoriasTexto1}>Cortes</Text>
        </View>

        <View style={styles.categorias}>
          <Ionicons name="cut" size={30} color="#b31010ff" />
          <Text style={styles.categoriasTexto1}>Barba</Text>
        </View>

        <View style={styles.categorias}>
          <Ionicons name="cut" size={30} color="#b31010ff" />
          <Text style={styles.categoriasTexto1}>Acabamento</Text>
        </View>
        

      </View>

      {/* Cardes de Barbearias */}

      <Text style={styles.textBarbearia}>Escolha sua Barbearia</Text>




    </View>
  );
}

const styles = StyleSheet.create({
  // container do projeto todo
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: "100%",
    height: "auto",
    color: 'white',
    alignItems: 'center',
    overflow: 'hidden',
  },

   // inicio e  iconer de hamburger
  header: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#1d1d1d',
    padding: 20,
  },
  leftContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  iconbarber: {
    color: 'red',
    fontSize: 40,
    marginRight: 4, 
  },
  cutText1: {
    color: 'white',
    fontSize: 30,
    marginLeft: 4, 
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

  },
  
  // contianer do input de pesquisa
  pesquisaInput: {
    backgroundColor: '#1d1d1d',
    width: '90%',
    borderColor: 'red',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    color: 'white',
    paddingLeft: 10,
    fontSize: 15

  },

  containerInput: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    width: '95%',
    color: 'white',

  },

  btnpesquisa: {
    backgroundColor: '#b31010ff',
    alignContent: 'center',
    padding: 5,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 7
  },


  // seção de categorias

  categoriasContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10
    
    

  },

  categorias: {
    flexDirection: 'row',
    backgroundColor: '#1d1d1d',
    padding: 5,
    borderRadius: 6,
    marginTop: 10,
    gap: 2,
    
  },

  categoriasTexto1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    padding: 5
      
    
  },


  // seção carde das Barbearias

  textBarbearia: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 18,
    textAlign: 'left'
  },
});
