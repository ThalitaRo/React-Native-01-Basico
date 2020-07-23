import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

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



        <View style={styles.botaoContainer}>
            <Button
            OnPress={_apresentaMensagem}
            title= 'Ok'
            />
        </View>

    {mostraMensagem && (
        <View>
      <Text style={styles.texto}>Olá {nome} {sobrenome}! {props.saudacao}</Text>
      <Text style={styles.texto}>{mensagem}</Text>
        </View>
    )}

         <View style={styles.botaoContainer}>
            <Button
            OnPress={_limpar}
            title= 'Limpar  '
            />
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     backgroundColor: '#081a31',
     width: 300,
     borderRadius: 5,
     padding: 10,
     margin: 10
  },
  titulo: {
      fontsize:16,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign:'center',
  },
  texto: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: "center",
  },
  campo: {
       backgroundColor: '#081a31',
      fontSize: 14,
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
      height: 35,
  },
  botaoContainer:{
      marginBottom: 5,
      marginTop: 5,
      borderRadius: 5,
  },
});
export default BoasVindas;
