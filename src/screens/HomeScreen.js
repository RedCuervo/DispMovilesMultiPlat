import { Button, Image, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//The home screen
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <View style={{
          height: 50, 
          width: '100%', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Text>Home Screen</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
        {/*Button that sends params*/}
        <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details',{name:'Jose'});
        }}
        />
        <Button
        title="Go to SnackExpoScreen"
        onPress={() => {
          navigation.navigate('SnackExpoScreen');
        }}
        />
        <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        >
          <Text>
            Go to Profile
          </Text>
        </TouchableOpacity>          
        </View>
      </View>
    );
  }
  export default HomeScreen;