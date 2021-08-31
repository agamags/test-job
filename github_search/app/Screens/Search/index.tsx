import React,{useState} from "react";
import {  TextInput, View ,Text,ScrollView,Image,TouchableOpacity,Linking} from "react-native";
import styles from './styles';

var timeOutId: any;

interface itemType {
    avatar_url: string
    login:string
    html_url: string
}
  
const Search = () => {

    const [data, setData] = useState([]);

    const onChange = (text: String) => {
        if (timeOutId) clearTimeout(timeOutId)
        return timeOutId = setTimeout(() => {
            getData(text)
            },2000)
    }
    const getData = async (text:any) => {
        if (text) {
            try {
                const response = await fetch(`https://api.github.com/search/users?q=${text}`);
                const json = await response.json();
                setData(json.items);
                } catch (error) {
                console.error(error);
            }
        }
        else {
            setData([]);
        }
    }
  
  return (
    <View style={styles.container}>
        <View style={styles.main}>
              <TextInput
                autoFocus
                style={styles.input}
                onChangeText={(text)=>onChange(text)}
          />
            <ScrollView showsVerticalScrollIndicator={false} >
            {
                data && data.length > 0 && data.map((item:itemType,index:Number) => (
                    <TouchableOpacity
                        onPress={()=> Linking.openURL(item.html_url)}
                        key={index.toString()} style={[styles.card, index === 0 ? { borderTopWidth: 1 } : null]}>
                         <Image
                            style={styles.image}
                            source={{ uri: item.avatar_url }}/>
                        <Text style={styles.title}>{item.login}</Text>
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
        </View>
    </View>
  );
};

export default Search;