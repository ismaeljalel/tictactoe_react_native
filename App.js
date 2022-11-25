import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, StyleSheet, Text, View, Image, Pressable, TouchableWithoutFeedback, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class App extends Component {

  setPosition(p){
    
    let position = p;
    
    if(this.state[position] != ''){
      Alert.alert('Posição já ocupada!');
    }else{
      
      let player = this.state.player;
      if(player == 'x'){
        this.setState({player: 'o'});
        this.setState({
          player: 'o'
        }, () => {
            this.getWinner();
        });
      }else{
        this.setState({player: 'x'});
        this.setState({
          player: 'x'
        }, () => {
            this.getWinner();
        });
      }
      this.setState({[position]: player});
      
    }

  }

  getWinner(){
    let p1 = this.state.p1;
    let p2 = this.state.p2;
    let p3 = this.state.p3;
    let p4 = this.state.p4;
    let p5 = this.state.p5;
    let p6 = this.state.p6;
    let p7 = this.state.p7;
    let p8 = this.state.p8;
    let p9 = this.state.p9;
    
    if(
      p1=='x' && p2=='x' && p3=='x' ||
      p4=='x' && p5=='x' && p6=='x' ||
      p7=='x' && p8=='x' && p9=='x' ||
      p1=='x' && p4=='x' && p7=='x' ||
      p2=='x' && p5=='x' && p8=='x' ||
      p3=='x' && p6=='x' && p9=='x' ||
      p1=='x' && p5=='x' && p9=='x' ||
      p3=='x' && p5=='x' && p7=='x' 
    ){
      Alert.alert('Jogador \'X\' é o vencedor!');
      this.reset();
    }else if(
      p1=='o' && p2=='o' && p3=='o' ||
      p4=='o' && p5=='o' && p6=='o' ||
      p7=='o' && p8=='o' && p9=='o' ||
      p1=='o' && p4=='o' && p7=='o' ||
      p2=='o' && p5=='o' && p8=='o' ||
      p3=='o' && p6=='o' && p9=='o' ||
      p1=='o' && p5=='o' && p9=='o' ||
      p3=='o' && p5=='o' && p7=='o' 
      ){
        Alert.alert('Jogador \'O\' é o vencedor!');
        this.reset();
    }else if(
      p1!='' && p2!='' && p3!='' &&
      p4!='' && p5!='' && p6!='' &&
      p7!='' && p8!='' && p9!='' &&
      p1!='' && p4!='' && p7!='' &&
      p2!='' && p5!='' && p8!='' &&
      p3!='' && p6!='' && p9!='' &&
      p1!='' && p5!='' && p9!='' &&
      p3!='' && p5!='' && p7!='' 
      ){
        Alert.alert('Ninguém Ganhou =(');
        this.reset();
    }
  }

  reset(){
    this.setState({player: 'x'});
    this.setState({p1: ''});
    this.setState({p2: ''});
    this.setState({p3: ''});
    this.setState({p4: ''});
    this.setState({p5: ''});
    this.setState({p6: ''});
    this.setState({p7: ''});
    this.setState({p8: ''});
    this.setState({p9: ''});
  }
  
  constructor(props){
      super(props);
      this.state = {
        player: "x",
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
        p6: '',
        p7: '',
        p8: '',
        p9: '',
      }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <StatusBar style="auto" />
        
        {this.state.player=='x' && 
        <View style={styles.playerX}>
            <Text style={styles.playerTitle}></Text>
            <Text style={styles.playerTitle}>Rodada: Jogador X</Text>
        </View>
        }
        {this.state.player=='o' && 
        <View style={styles.playerO}>
            <Text style={styles.playerTitle}></Text>
            <Text style={styles.playerTitle}>Rodada: Jogador O</Text>
        </View>
        }
        
        <View style={styles.board}>
          
          <Pressable style={styles.cell1} onPress={() => {this.setPosition('p1')}} >
            {this.state.p1=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p1=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell2} onPress={() => {this.setPosition('p2')}} >
            {this.state.p2=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p2=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell3} onPress={() => {this.setPosition('p3')}} >
            {this.state.p3=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p3=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell4} onPress={() => {this.setPosition('p4')}} >
            {this.state.p4=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p4=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell5} onPress={() => {this.setPosition('p5')}} >
            {this.state.p5=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p5=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell6} onPress={() => {this.setPosition('p6')}} >
            {this.state.p6=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p6=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell7} onPress={() => {this.setPosition('p7')}} >
            {this.state.p7=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p7=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell8} onPress={() => {this.setPosition('p8')}} >
            {this.state.p8=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p8=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
          <Pressable style={styles.cell9} onPress={() => {this.setPosition('p9')}} >
            {this.state.p9=='x' && <Image style={styles.icon} source={require('./img/x.png')} />}
            {this.state.p9=='o' && <Image style={styles.icon} source={require('./img/o.png')} />}
          </Pressable>
        </View>


        <View style={styles.reload}>
          <TouchableWithoutFeedback
           onPress={() => {this.reset()}} 
          >
          <Image
            style={styles.reloadIcon}
            source={require('./img/iconReload.png')}
          />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player: {
    flex: 1,
    backgroundColor: '#008c46',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerX: {
    flex: 1,
    backgroundColor: '#008c46',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerO: {
    flex: 1,
    backgroundColor: '#B2B200',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60
  },
  reload: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerTitle: {
    color: '#FFF',
  },
  reloadIcon: {
    marginTop:100,
    width: 50,
    height: 50,
  },
  cell1: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6
  },
  cell2: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6
  },
  cell3: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderLeftWidth: 6,
  },
  cell4: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderRightWidth: 6,
  },
  cell5: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
  },
  cell6: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderLeftWidth: 6,
  },
  cell7: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell8: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell9: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  icon: {
    height: 62,
    width: 62
  },
});
