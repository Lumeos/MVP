import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { isMobileDevice } from './helpers/helpers';
import CONFIG from '../../../config.json';


class Home extends React.Component {
  constructor(props){
    super(props);;
    this.state = {
      loggedin: this.props.location.state ? this.props.location.state.loggedin: false, //check if a valid state object is passed or a user went directly to URL
      email: '',
      firstName: '',
      lastName: '',
    }
  }


  initializeReferralSaasquatchUser(userId){

      let loggedinUser = {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      }

      // when squatch.js is ready to use
      window.squatch.ready(async function(){
        console.log('saasquatch in action')
       //configure squatch.js for the tenant you are using
       squatch.init({
        tenantAlias: 'test_a4c3vl89elaon' // This is the TEST alias
       });

       let temporaryId = Math.floor(Math.random() * 1000000000);
       
       console.log('here is user obj', loggedinUser)
       
       //object containing the init parameters for squatch.js
       var initObj = {
         //the object for the user you want to upsert
         user: {
           id: String(userId), 
           accountId: String(userId),
           email: loggedinUser.email,
           firstName: loggedinUser.firstName,
           lastName: loggedinUser.lastName,
           referredBy: {
             isConverted: true
           }
         },
         engagementMedium: 'POPUP',
         widgetType: 'REFERRER_WIDGET',
        };
      
        let token = await axios.post('/api/v1/jwt', initObj)  

        initObj.jwt = token.data; 

        console.log('here is SaaSquatch Object to be sent', initObj)
         //update/register a referral participant and display a widget
        squatch.widgets().upsertUser(initObj)
        .then(function(response) {
          let user = response.user; 
        })
        .catch(function(error){
          console.log(error);
        });

      });

  }

  async componentDidMount(){

    let getFacebookUserData = ()=>{

      let fbPayLoad = {fields: 'id,name,first_name,last_name,email'};

      if (isMobileDevice() === false){
        fbPayLoad.access_token = window.sessionStorage.fbToken;
      }

      return new Promise((resolve) => {
        FB.api('/me', fbPayLoad, (response)=>{
          console.log('here is ', response)
          resolve(response);
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

        })

      });
    }

    let fetchLumeosToken = async ()=>{
      let response = await axios.post(`${CONFIG.LUMEOS_SERVER}/v1/login`, {"email" : "admin@lumeos.io", "password" : "test"});
      window.sessionStorage.lumeosToken = response.data.token;
      console.log('here is lumeos token', window.sessionStorage.lumeosToken);
    }


    let getUserId = async ()=>{
      axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.lumeosToken}`;
      axios.defaults.headers.common['Content-Type'] = `application/json`;
      
      // let config = {
      //   headers: {
      //     'Authorization': `Bearer ${window.sessionStorage.lumeosToken}`,
      //     'Content-Type': 'application/json'
      //   }
      // }
      try{
        let response =  await axios.post(`${CONFIG.LUMEOS_SERVER}/v1/users`, {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email/*+Math.random()*/, password: 'facebook_password'})
        console.log('Here is Lumeos Server Response', response.data);
        return response.data.user_id;
      }
      catch(err){
        console.log('could not create user, trying to find user in DB....', err);
        let response = await axios.get(`${CONFIG.LUMEOS_SERVER}/v1/users`, {params:{ queryEmail:this.state.email }});
        console.log('Here is Lumeos Server Response', response.data);
        return response.data[0].id;
        
      }
        
    }

   fbLoaded.promise
   .then(()=>FB.getAuthResponse())
   .then((response)=>{
      if (window.sessionStorage.fbToken === undefined || response !== undefined) {
        window.sessionStorage.fbToken = response.accessToken;
      } else if (response === undefined && window.sessionStorage.fbToken === undefined) { 
        //no response from FB & no local FB token available....go back to home page
        this.setState({loggedin: false})
      }
    })
   .then(getFacebookUserData)
   .then(fetchLumeosToken)
   .then(getUserId)
   .then((response)=>{ this.initializeReferralSaasquatchUser(response) });

}

render(){

    if (!this.state.loggedin) {
       return <Redirect to='/signin'/>;
    }

    return (
      <div>
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 350, marginTop: 150 }}>
            <CardExampleCard {...this.state} />
            <ReferralButton/>
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


const ReferralButton = (props)=>
  (<div>
    <Button primary size="large" className="squatchpop">Refer a Friend</Button>
   </div>)

export default Home;


