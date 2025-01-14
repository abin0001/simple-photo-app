import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ImageViewer from './components/imageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';


const PlaceholderImage =require('./assets/img.png');


export default function App() {

  const [showAppotions, setShowAppOptions]=useState(false);
  const [selectedImage, setSelectedImage] =useState(null);

  const pickImageAsync=async()=>{
    let result =await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else{
      alert('You did not select any image');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}></ImageViewer>
      </View>
      {showAppotions ?(<View/>):(<View style={styles.footerContainer}>
        <Button onPress={pickImageAsync} theme={'primary'} label={"Choose a photo"}></Button>
        <Button label={"Use this photo"} onPress={()=>setShowAppOptions(true)}></Button>
        
      </View>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
  },
  footerContainer:{
    flex:1/3,
    alignItems:'center'
  }
});
