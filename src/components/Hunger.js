import React from 'react';
import {HungerLevel} from '../components/Canvas'

class Hunger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hunger: 51,
            timer:5,
        };
    }

    componentDidMount() {
        this.timerHunger = setInterval(
          () => this.decrHunger(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerHunger);
      }
      
      decrHunger = () => {
        let j=this.state.hunger;
        let o=this.state.timer;
        o--
        this.setState({
            timer : o
        })
        if (o === 0){
            this.setState({
                timer:5
            })
            j=j-0.1
            this.setState({
                hunger:j
            })

        }

      }
    render() {
        const isHungry = Math.floor(this.state.hunger) + HungerLevel;
        let hungerMsg;
        if (isHungry <= 50 &&  isHungry >= 26) {
            hungerMsg = 'Your pet feels kind of hungry'
        }
        else if (isHungry === 25) {
            hungerMsg = 'Your pet needs to feed!'
        }
        else if (isHungry === 10) {
            hungerMsg = 'Feed your pet or it might die!'
        }
        else {
            hungerMsg = 'Your pet is okay!'
        }
       
        return (
            <>
            {/* <div>Current hunger = {isHungry} ({hungerMsg})</div> */}
            </>
        );
    }
}

export default Hunger;