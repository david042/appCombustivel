import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [resultado, setResultado] = useState();

  function calcular(){
    if((alcool / gasolina) << 0.7) {
      setResultado("melhor abastecer com álcool hein");
    } else {
      setResultado("melhor abastecer com gasolina patrão");
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Combustível Calculator </Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.fragmaq.com.br/wp-content/uploads/2016/05/1-Gasolina.jpg',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quanto ta o litro do álcool??? </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={alcool}
          placeholder='álcool:'
          onChangeText={(texto)=>setAlcool(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quanto ta o litro da gasosa??? </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder='gasolina:'
          value={gasolina}
          onChangeText={(texto)=>setGasolina(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={calcular}>
            <Text style={styles.textoBotao}> Calcular </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.texto}> {resultado} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#000',
    fontSize: 30
  },
  textoBloco:{
    fontSize:30,
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#008',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5
  }
});