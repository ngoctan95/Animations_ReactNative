/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing, Dimensions
} from 'react-native';
const {width, height}=Dimensions.get("window");

export default class App extends Component {
  state ={
    // animVal : new Animated.Value(0),
    x:null,
    y:null,
    marginLeft: new Animated.Value(0),
    marginTop:new Animated.Value(0),
    currentImage
  }
  componentWillMount(){
   this.animVal=new Animated.Value(0)
   this.imgVal=new Animated.Value(-100)
  }
  componentDidMount(){
    const anim01 = Animated.timing(
      this.animVal,
      {
        duration:5000,
        easing: Easing.cubic,
        toValue:2
      }
    )
    const anim02=Animated.timing(
      this.imgVal,
      {
        duration:2000,
        easing:Easing.linear,
        toValue: 0
      }
    )
    //Using that func for looping the function.
     //Animated.loop(anim01).start();
    
    //Animate by in sequence, one by one. 
      // Animated.sequence([anim01,anim02]).start();
    //Animate one by one after the delay time.
      // Animated.stagger(1000,[anim01,anim02]).start();
    //Animate by the same time all of object.
      // Animate.paralel([anim01,anim02]).start();
  }
  onDrag=(event)=>{
    const {x,y}=this.state;
    const marginLeft = new Animated.Value(event.nativeEvent.locationX);
    const marginTop=new Animated.Value(event.nativeEvent.locationY);
    this.setState({
      marginLeft,marginTop
    })
    // const dragX=Animated.timing(
    //   this.state.marginLeft,
    //   {
    //     toValue:0,
    //     duration:10,
    //     easing:Easing.circle
    //   }
    // )
    // const dragY=Animated.timing(
    //   this.state.marginTop,
    //   {
    //     toValue:0,
    //     duration:10,
    //     easing:Easing.circle
    //   }
    // )
    // Animated.parallel([dragX,dragY]).start();
  }
  onPress=(event)=>{
    // this.setState({
    //   x:event.nativeEvent.locationX,
    //   y:event.nativeEvent.locationY
    // })
    // console.log(event.nativeEvent.locationX +"-"+event.nativeEvent.locationY);
  }
  onMoveUp=(event)=>{
    // const {x,y}=this.state;
    // const marginLeft = new Animated.Value(event.nativeEvent.locationX);
    // const marginTop=new Animated.Value(event.nativeEvent.locationY);
  }
  render() {
    //Set the backgroundColor changed from green to orange by the inputRange.
    const val01  = this.animVal.interpolate(
      {
        inputRange: [ 0,0.5,2],
        outputRange:['green','black','orange']
      }
    )
    const rotate01 = this.animVal.interpolate(
      {
        inputRange:[0,1,2],
        outputRange:['0deg','180deg','0deg']
      }
    )
    return (
      <View style={styles.container}
      onStartShouldSetResponder={()=>true}
          onMoveShoudSetResponder={()=>true}
          onResponderMove={this.onDrag}
          onResponderRelease={this.onMoveUp}
          onResponderGrant={this.onPress}>
        {/*for testing the first interpolate.*/}
          {/* <Animated.Image style={{width:100,height:100,left:this.animVal }} source={{uri:'https://i.pinimg.com/originals/77/d7/88/77d788575c26ad499024abbf5e195c22.jpg' }}/>
          <Animated.Image style={{width:100,height:100,left:this.imgVal }} source={{uri:'https://i.pinimg.com/originals/77/d7/88/77d788575c26ad499024abbf5e195c22.jpg' }}/> */}
        
        {/*for testing the secondary interpolate.*/}
        {/*Transform with an array for transforming.*/}
          {/* <Animated.View style={{width:100,height:100,
            backgroundColor :val01,
            transform: [{rotateX: rotate01},{rotateY: rotate01}]
            }}>
            <Text>Animation</Text>
            </Animated.View> */}
        
        {/*Using that for test'in the response view.*/}
        <Animated.View 
          style={{width:100,height:100,backgroundColor:'green',
          marginLeft:this.state.marginLeft,
          marginTop:this.state.marginTop}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
