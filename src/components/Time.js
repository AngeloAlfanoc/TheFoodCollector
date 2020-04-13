import React from 'react';

export let currentTime = {
    hours:'',
    minutes:'',
    seconds:''
}


class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
        currentTime.hours = this.state.date.getHours();
        currentTime.minutes = this.state.date.getMinutes();
        currentTime.seconds = this.state.date.getSeconds();
      }
    
      render() {
          
        return (
          <div>
           
          </div>
        );
      }
    
}

export default Time;
