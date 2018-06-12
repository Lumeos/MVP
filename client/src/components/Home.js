import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedin: false
    }
  }

  componentDidMount(){

    FB.api('/me', {fields: 'id,name,first_name,last_name,email'}, (response)=>{

        this.setState({loggedin: true});
        if (response.error){
          //handle error 
        }
        console.log('Successful login for: ', response);
        this.setState({
          firstName: response.first_name,
          lastName: response.last_name,
          fullName: response.name,
          id: response.id,
          email: response.email,
        })
      });

  }

  render(){

    // if (!this.state.loggedin) {
    //    return <Redirect to='/signin'/>;
    // }

    return (
      <div>
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 350, marginTop: 150 }}>
            <CardExampleCard {...this.state} />
          </Grid.Column>
        </Grid>
      </div>)
  }
}


const CardExampleCard = (props) => (

  <Card>
    <Image src='static/images/lumeos_logo.png' />
    <Card.Content>
      <Card.Header>Logged in as:<br/> {props.fullName}</Card.Header>
      <Card.Meta>
        <span className='date'>id: {props.id}</span>
      </Card.Meta>
      <Card.Description>Email: {props.email}</Card.Description>
    </Card.Content>
  </Card>
)

export default Home;


