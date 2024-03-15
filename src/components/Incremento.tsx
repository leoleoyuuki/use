import { useState } from 'react';
import {Text, Button, View } from 'react-native'

export default (props)=> {

    const [numMais, setNumMais] = useState(props.valor)
    const [numMenos, setNumMenos] = useState(props.valor)

    function aumentar(){
        setNumMais(numMais+1)
        
    }
    function diminuir(){
        setNumMenos(numMenos-1)
    }

  return (
    <View>
        <Text>{numMais}</Text>
        <Button  title='AUMENTAR' onPress={aumentar}/>

        <Text>{numMenos}</Text>
        <Button  title='DIMINUIR' onPress={diminuir}/>
    </View>
    
  )
}
