import React from 'react';
import Component from './Component'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){

  }

  render () {
    return (<div> 
              <h1>MERN Starter Kit</h1>
              This is your App!
              <Component />
            </div>);
  }
}

export default App;