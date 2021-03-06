import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Grid, Header, Image, Message, Icon } from 'semantic-ui-react'
import { GridStyle, ButtonStyle, SignInStyle, SplashHeaderStyle } from './styles';


const Home = (props) => {

  return (
   <div className="splashpage">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.splashpage {
        height: 100%;
      }
    `}
    </style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={GridStyle}>
        <Image as={Link} to='/'src='static/images/lumeos_logo.png' size='medium' centered={true} style={{'marginBottom': '1em'}} />
        <Image src='static/images/icon_lock.png' centered={true} style={{'marginBottom': '1em'}} />
        <Header as='h2' textAlign='center' style={SplashHeaderStyle}>
          Privacy
        </Header>
        <p id='splashpage-welcome-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper est eu lacus. 
        </p>
          <Button 
            as={Link} 
            to='/signup' 
            fluid 
            size='big' 
            style={ButtonStyle} 
            id="signup-button">
              Sign Up
          </Button>
        <Link to='/signin'><p style={SignInStyle}>Already a User</p></Link>
      </Grid.Column>
    </Grid>
  </div>)

}

export default Home;