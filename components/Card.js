import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component{
    render(){
        return(
            <View>
                <CardSection>

                    <View style={{ flexDirection: 'row'}}>
                        <Image
                            style={{ width: 100, height: 100, marginTop: 10, marginLeft: 10}}
                            source={{uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/37/81/59/378159a6-bf9f-b543-3612-112c6510df8f/dj.lcmtrdtw.jpg/600x600bf.png'}}
                        />
                    <View style={{ marginTop: 10, marginLeft: 10}}>
                        <Text>Bad Boy Down</Text>
                        <Text>Red Velvet</Text>
                    </View>
                </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={{ width: 390, height: 400, marginTop: 10, marginRight: 10 }}
                        source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/61JAxkK5iML._SX425_.jpg'}}
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.button}>
                    <View style={{width: 100}}>
                    <Button
                        title="Buy This"
                        color="#1E90FF"
                        />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
}
export default Card;