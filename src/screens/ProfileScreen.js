import { Button, Image, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ProfileScreen ({navigation,route}){
    return(
        <View style={{flex:1, alignItems:'center'}}>
        <View style={{
          height: 50, 
          width: '100%', 
          alignItems: 'center', 
          justifyContent: 'center'
        }}>
          <TouchableOpacity 
          onPress={() => navigation.popToTop()}>
            <Text style={{
                marginLeft: 10
            }}>Go top</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the profile Screen</Text>

        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
        >
            <Text>
                Go to Home
            </Text>
        </TouchableOpacity>
    </View>
    </View>
    )
}
export default ProfileScreen;
