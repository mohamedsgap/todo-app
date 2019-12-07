import React from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, Button } from 'react-native';
import {Constants} from 'expo'


let id = 0 ;
const Todo = props => (
  <View style={styles.todoContainer}>
    <Switchh value={props.todo.checked} onValueChange={props.onToggle}/>
    <Button onPress={props.onDelete} title='delete'/>
    <Text>{props.todo.text}</Text>
  </View>
  )

  export default class App extends React.Component{
    constructor(props){
      super(props)
      this.state =  {
        todos: [],
      }
    }
    render(){
      return(
        <View>
          
        </View>
      )
    }
  }

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  fill: {
    flex: 1,
  }
});
