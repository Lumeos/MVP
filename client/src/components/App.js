import React from 'react';
import SplashPage from './SplashPage';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './Login';
import SignUp from './Signup';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render () {
    return (<div>
              <Switch> 
                <Route exact path='/' component={SplashPage} />
                <Route exact path='/signin' component={LoginForm} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/home' component={Home} />
              </Switch>
            </div>);
  }
}

export default App;