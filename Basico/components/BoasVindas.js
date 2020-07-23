import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

function BoasVindas(props) {

  const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const [nome, setNome]  = useState ('');
     const [sobrenome, setSobrenome]  = useState ('');
     const [mostraMensagem, setMostraMensagem] = useState(false);

    const _apresentaMensagem = () => {
       if(!nome == '' && !sobrenome == ''){
           setMostraMensagem(true);
       }else{
           Alert.alert(
               'Preenchimento obrigatório!', 
               'Informe o nome e o sobrenome',
               [
                   {text: 'Ok'},
                ],
           );
       }
    }

    const _limpar = () => {
        setNome('');
        setSobrenome('');
        setMostraMensagem(false);
    }

  return (
    <View style={styles.container}>

        <Text style={styles.titulo} >Identifiqu-se!</Text>

        <TextInput
        Style={StyleSheet.campo}
        placeholder="Digite seu nome"
        OnChangeText={nome => setNome(nome)}
        value={nome}
        />

         <TextInput
        Style={StyleSheet.campo}
        placeholder="Digite seu sobrenome"
        OnChangeText={sobrenome => setSobrenome(sobrenome)}
        value={sobrenome}
        />

    {mostraMensagem && (
        <View>
      <Text style={styles.texto}>Olá {nome} {sobrenome}! {props.saudacao}</Text>
      <Text style={styles.texto}>{mensagem}</Text>
        </View>
    )}

         <TouchableOpacity style={styles.botaoContainer} onPress={_apresentaMensagem}>
            <Text style={styles.botaoTexto}>Ok</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoContainer} onPress={_limpar}>
            <Text style={styles.botaoTexto}>Limpar</Text>
            </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
 container:{
      backgroundColor: 'black',
      width: 300,
      borderRadius: 5,
      padding: 10,
      margin: 10  
    },
    titulo:{
        fontStyle:16,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    campo:{
        color:'#FFFFFF',
        backgroundColor:'#ff4d4d',
        fontSize:14,
        height:35,
        marginBottom:5,
        marginTop:5,
        borderRadius:5,
        textAlign:'center',
        placeholderTextColor:'#FFFFFF',
    },
    botaoContainer:{
        color:'white',
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height:40,
        borderWidth:2,
        borderColor:'white',
        backgroundColor:'#ff4d4d',
        justifyContent:'center',
        alignItems:'center',
  },
  botaoTexto:{
        fontSize:14,
        color:'white',
    },
});
export default BoasVindas;
