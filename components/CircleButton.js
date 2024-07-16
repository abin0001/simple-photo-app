import { View,Pressable,StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";4


export default function CircleButton({onPress}){
    return (

        <View>
            <Pressable>
                <MaterialIcons name='add' size={38} color={'#25292e'}/>
            </Pressable>
        </View>

    );
}

const styles