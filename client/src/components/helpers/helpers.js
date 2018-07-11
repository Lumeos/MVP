let isMobileDevice = function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


//code to log user into facebook using Facebook Javascript SDK
let facebookLogin = function(callback){
  
  FB.login((response)=> {
    if (response.authResponse) {
      //user just authorized your app
      console.log('user logged in', response);

      if (response.status === 'connected'){
        callback();
        console.log('here is response', response);
        window.sessionStorage.fbToken = response.authResponse.accessToken;
      }

    }
  }, {scope: 'email,public_profile', return_scopes: true});

}  


export { isMobileDevice, facebookLogin } ; 