import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Divider, Icon } from 'semantic-ui-react'
import { ButtonStyle, SignInStyle, LinkStyle } from './styles';

const FormStyle = {
  marginTop: '2em'
}

class SignUp extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
      value: 'male'
    }
  }
  
  handleChange(e, selection){
    this.setState({ value: selection.value });
  } 

  render() {
    const { value } = this.state;

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
          <Grid.Column style={{ maxWidth: 350, marginTop: 100 }}>
            <Image as={Link} to='/' src='static/images/lumeos_logo.png' size='medium' centered={true} style={{marginTop:80}}/>
            <Form size='large' style={FormStyle}>
              <Segment stacked>
                <Form.Input fluid placeholder='Name' />
                <Form.Input fluid placeholder='Email' />
                <Form.Input fluid placeholder='Phone' type='number' />
                <Form.Group inline>
                  <label>Size</label>
                  <Form.Radio
                    label='Male'
                    value='male'
                    checked={this.state.value === 'male'}
                    onChange={this.handleChange.bind(this)}
                  />
                  <Form.Radio
                    label='Female'
                    value='female'
                    checked={this.state.value === 'female'}
                    onChange={this.handleChange.bind(this)}
                  />
                </Form.Group>
                <Form.Input fluid placeholder='Location' />
                <Form.Input fluid placeholder='School' />
                <Form.Input fluid placeholder='Employer' />
                <Form.Checkbox label={<label> I agree to the <Link to='#' style={LinkStyle}>Terms and Conditions</Link></label>} />
                <Button fluid size='big' style={ButtonStyle} id="signin-button">
                  Create Account
                </Button>
              </Segment>
            </Form>
            <div>
              <Divider horizontal>or</Divider>
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
