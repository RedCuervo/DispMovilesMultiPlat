import React, {useState} from 'react';
import {Text,View, Image, TextInput, Button, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName+' '+secondName+' '+thirdName;
};
//custom button
const CustomButton = ({onPress}) => (
  <Pressable style={{
    backgroundColor: 'rgb(180,100,255)',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical:10
    }} onPress={onPress}>
    <Text style={{
    color: 'white',
    fontSize: 16,
    }}>Rename</Text>
  </Pressable>
);

//screen from snack expo practices
const CatScreen = ({navigation, route}) => {
    //using "useState" 
const [name,setName]=useState('');
const [inputValue, setInputValue]=useState('');
const [number,setNumber]=useState(0)
return(
  <View
  style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'azure',
  }}>
  <Text
  style={{
    color:'violet',
    fontSize:20,
    textAlign:'center',
  }}
  >Hello, I am {getFullName('Antua', 'Dominico', 'Segundo')}!</Text>
  <View
  style={{
        flexDirection: 'row',
        flexWrap:'wrap',
      }}>
      
  <Image source={{uri:'https://cdn.memes.com/up/61119311660315974/i/1661959335484.png'}}
  style={{width:200, height: 210, marginTop:40,borderRadius:10, borderColor:'darkgray',marginHorizontal:10}} />
  
  </View>

  <TextInput
  style ={{
    marginTop:10,
    paddingHorizontal:5,
    heigh:40,
    borderColor:'gray',
    borderWidth:1,
    textAlign: 'center',
    width:'50%',
    borderRadius:5,
  }}
  value={inputValue}
  onChangeText={setInputValue}
  placeholder='Name Me!!'
  />
  <CustomButton onPress={()=>setName(inputValue)}/>
  
  <Text>Hello, I am {name}</Text>

  <View
  style={{marginVertical:40, borderTopColor:'black', borderWidth:2, padding:2, borderRadius:5, backgroundColor:`rgb(${number/2+(number*3)},200,${number*2-(number/3)})`}}
  >
  <Button
  title="Click Me"
  onPress={()=>{setNumber(number+5)}}
  />
  <Text style={{textAlign:'center', marginVertical:2, fontSize:20, color: `rgb(${number},${number},${number})`}}>{number}</Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{
                marginLeft: 10
            }}>Go Home</Text>
        </TouchableOpacity>

  </View>
);
};

export default CatScreen;
