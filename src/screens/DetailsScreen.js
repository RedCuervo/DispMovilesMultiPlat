import { Image, Pressable, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

function DetailsScreen({navigation, route}) {
  //a secret button, also using params from another screen to display a name
    const SecretButton = () => (
      <Pressable onPress={() => navigation.navigate('Custom')}>
        <Text style={{color:'black', fontSize:16}}>{route.params?.name || 'Default Name'}</Text>
      </Pressable>
    );
  
    return (
      <View style={{flex:1, alignItems:'center'}}>
      <View style={{
        height: 50, 
        width: '100%', 
        alignItems: 'left', 
        justifyContent: 'center'
      }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{
                marginLeft: 10
            }}>Go back</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome {<SecretButton/>} to Details Screen!</Text>
        
      </View>
      </View>
    );
  }
  
  export default DetailsScreen;