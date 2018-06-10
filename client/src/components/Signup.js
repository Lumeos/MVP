import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Divider, Icon } from 'semantic-ui-react';
import { ButtonStyle, SignInStyle, LinkStyle } from './styles';
import TermsAndConditionsModal from './Terms-and-conditions';

const FormStyle = {
  marginTop: '2em'
}

class SignUp extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: 'male',
      number: '',
      location: '',
      school: '',
      employer: ''
    }
  }
  
  handleChange(e, selection, optionType){
    this.setState({ [optionType]: selection.value }); //change state to passed in option type
  } 

  render() {

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
          <Grid.Column style={{ maxWidth: 350, marginTop: 150 }}>
            <Image as={Link} to='/' src='static/images/lumeos_logo.png' size='medium' centered={true} style={{marginTop:80}}/>
            <Form size='large' style={FormStyle}>
              <Segment stacked>
                <Form.Input fluid placeholder='Name' value={this.state.name} onChange={(e,selection)=>this.handleChange(e, selection,'name')}/>
                <Form.Input fluid placeholder='Email' value={this.state.email} onChange={(e,selection)=>this.handleChange(e, selection,'email')}/>
                <Form.Input fluid placeholder='Phone' value={this.state.phone} type='number' onChange={(e,selection)=>this.handleChange(e, selection,'number')}/>
                <Form.Group inline>
                  <label>Gender</label>
                  <Form.Radio
                    label='Male'
                    value='male'
                    checked={this.state.gender === 'male'}
                    onChange={(e,selection)=>this.handleChange(e, selection,'gender')}
                  />
                  <Form.Radio
                    label='Female'
                    value='female'
                    checked={this.state.gender === 'female'}
                    onChange={(e,selection)=>this.handleChange(e, selection,'gender')}
                  />
                </Form.Group>
                <Form.Input fluid placeholder='Location' value={this.state.location} onChange={(e,selection)=>this.handleChange(e, selection,'location')}/>
                <Form.Input fluid placeholder='School' value={this.state.school} onChange={(e,selection)=>this.handleChange(e, selection,'school')}/>
                <Form.Input fluid placeholder='Employer' value={this.state.employer} onChange={(e,selection)=>this.handleChange(e, selection,'employer')}/>
                <Form.Checkbox label={<label> I agree to the {<TermsAndConditionsModal />}</label>} />
                <Button fluid size='big' style={ButtonStyle} id="signin-button">
                  Create Account
                </Button>
              </Segment>
            </Form>
            <div>
              <Divider horizontal>or</Divider>
                <Button 
                  as={Link} 
                  to='/signin' 
                  fluid 
                  size='big' 
                  style={ButtonStyle} 
                  id="signup-button">
                  Sign In
                </Button>
                <Button fluid color='facebook'size='big' style={ButtonStyle}>
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

export default SignUp;
