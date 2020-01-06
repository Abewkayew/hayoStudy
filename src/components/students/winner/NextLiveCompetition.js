
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';

class Notice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timer: 5,
            showOnlineText: false
        }
    }
    
    componentDidMount(){
        this.interval = setInterval(
        () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
        1000
        );    
        this.checkTimer();
    }
    
    componentDidUpdate(){
        if(this.state.timer === 1){ 
            clearInterval(this.interval);
        }
    }

    checkTimer(){
        if(this.state.timer === 1){
            this.setState({
                showOnlineText: !this.state.showOnlineText
            })
        }

    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }
        
    render(){
        const {timer, showOnlineText} = this.state;
        return (
            <>
            <View style={styles.container}>
                    {
                        showOnlineText ? (
                            <Text>Competition started</Text>
                        ): (
                            <>
                                <Text style={styles.text}>Next live competition starts in</Text>
                                <Text style={styles.styleClock}>{timer}hr</Text>
                            </>
                        )
                    }

                    
            </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: 'bold'
    },
    styleClock: {
        color: '#f80',
        fontSize: 22,
        fontWeight: '700',
        marginVertical: 5
    }
});

export default withNavigation(Notice);
