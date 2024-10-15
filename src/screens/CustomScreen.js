import { Image, StyleSheet, Text, View } from 'react-native';
//custom screen, accessed by secret button
function CustomScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'violet' }}>
        <Text>My custom Screen</Text>
        <Image source={{ uri: 'https://cdn.memes.com/up/61119311660315974/i/1661959335484.png' }}
          style={{ width: 200, height: 210, marginTop: 40, borderRadius: 10, borderColor: 'darkgray', marginHorizontal: 10 }} />
      </View>
    );
  }
  export default CustomScreen;