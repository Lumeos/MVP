import React from 'react';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './Login';
import SignUp from './Signup';
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount(){

  }

  render () {
    return (<div>
              <Switch> 
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={LoginForm} />
                <Route exact path='/signup' component={SignUp} />
              </Switch>
            </div>);
  }
}

export default App;