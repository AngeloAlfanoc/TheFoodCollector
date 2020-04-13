import React from 'react';
import Hunger from './components/Hunger'
import CanvasComponent from './components/Canvas'

class App extends React.Component {    

      render() {
          
       
        return (
         <>
         <Hunger/>
         <CanvasComponent/>
         </>
        );
      }
    
}
export default App;
