import React, { Component } from 'react';
import { View, Button, Alert, TouchableOpacity, Text } from 'react-native';
//Adding Sound Dependency
import { Audio } from 'expo-av';

//created a global variable to store the sound so that i can access it everywhere
var globalsound;

export default class App extends Component {
  
  playSound=async(url)=> {
  
    //Enabled the sound
    await Audio.setIsEnabledAsync(true);
    //Assigning URL to the sound and saving the sound object
    const {sound} = await Audio.Sound.createAsync(
        { uri: url },
    );
    //assigning the sound object to the global variable so I can access everywhere
    globalsound = sound

    //playing the sound
    globalsound.playAsync();
   
  }

  render() {
    return (
                                                        //Creating Sound Button
      <View style={{justifyContent:'center', 
    alignItems:'center', paddingBottom:90, paddingTop:50}}>
    <Text style={{color:"red",fontSize:25}}>Play & Stop Sound</Text>
         <View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'blue',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3';
              this.playSound(url);
            }}>
            <Text style={{color:"white"}}> Sound </Text>
          </TouchableOpacity>
        </View>

       
 

        <TouchableOpacity
          style={{                           //Creating Stop Sound Button
            width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'green',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
          }}
          onPress={async () => {
            //Stopping the sound
            Audio.setIsEnabledAsync(false);
            //Unloading the sound from memory
            globalsound.unloadAsync();
          }}>
          <Text style={{color:"white"}}> Stop Sound </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
