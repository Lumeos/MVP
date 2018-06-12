import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Divider, Icon } from 'semantic-ui-react'
import { ButtonStyle, SignInStyle, LinkStyle } from './styles'
import { Redirect } from 'react-router-dom'; 


class LoginForm extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      loggedin: false
    }
  }
  
  FacebookLogin() {
         
    //Perform the login
    FB.login((response)=> {
      if (response.authResponse) {
        //user just authorized your app
        console.log('user logged in', response);

        if (response.status === 'connected'){
          this.setState({loggedin: true});
        }

      }
    }, {scope: 'email,public_profile', return_scopes: true});
  }

  render(){

  //Redirect to Home if user is loggedin
     if (this.state.loggedin) {
       return <Redirect to={{
          pathname:'/home', 
          state: {
            loggedin: this.state.loggedin
          }
        }} />;
     }


  return (
      <div className='login-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 350 }}>
            <Image as={Link} to='/' src='static/images/lumeos_logo.png' size='medium' centered={true} />
            <Header as='h2' textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large'>
                <Form.Input 
                  fluid 
                  icon='user' 
                  iconPosition='left' 
                  placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
                <Button 
                  fluid 
                  size='big'
                  style={ButtonStyle}
                  id="signin-button">
                  Login
                </Button>
                <Link to='#' style={{color: 'grey'}}> Forgot Password? </Link>
            </Form>
            <div>
              <Divider horizontal>or</Divider>
                <Button 
                  as={Link} 
                  to='/signup' 
                  fluid 
                  size='big' 
                  style={ButtonStyle} 
                  id="signup-button">
                    Sign Up
                </Button>
                <Button id="loginBtn" fluid color='facebook' size='big' style={ButtonStyle} onClick={this.FacebookLogin.bind(this)}>
                    <Icon name='facebook' /> Facebook
                </Button>
                <Button fluid color='twitter' size='big' style={ButtonStyle}>
                  <Icon name='twitter' /> Twitter
                </Button>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm;
