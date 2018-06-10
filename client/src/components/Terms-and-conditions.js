import React from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {LinkStyle} from './styles';

class TermsAndConditionsModal extends React.Component { 
  constructor(){
    super();
    this.state = { modalOpen: false   }
  }

  handleOpen() {
    this.setState({ modalOpen: true })
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  render() {
      return (
      <Modal open={this.state.modalOpen} style={{height: 'auto'}} size='mini' closeIcon onClose={this.handleClose.bind(this)} trigger={<a onClick={this.handleOpen.bind(this)} style={LinkStyle}>Terms & Conditions</a>}>
        <Modal.Content >
          <Modal.Description>
            <Header textAlign='center'>Terms & Conditions</Header>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Cras congue bibendum convallis. Nam id sagittis ligula, 
             non feugiat est. Donec quis faucibus dui, sit amet rutrum nunc. 
             n aliquam nunc neque, ac faucibus lectus aliquam nec. Vestibulum 
             consectetur, nisl eget dapibus ultrices, leo felis condimentum nisl, 
             a consectetur arcu neque in turpis. Etiam aliquam quam nulla, sed finibus 
             turpis euismod ac. Duis eros eros, pretium vitae tortor sit amet, cursus 
             suscipit nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             Cras congue bibendum convallis. Nam id sagittis ligula, 
             non feugiat est. Donec quis faucibus dui, sit amet rutrum nunc. 
             n aliquam nunc neque, ac faucibus lectus aliquam nec. Vestibulum 
             consectetur, nisl eget dapibus ultrices, leo felis condimentum nisl, 
             a consectetur arcu neque in turpis. Etiam aliquam quam nulla, sed finibus 
             turpis euismod ac. Duis eros eros, pretium vitae tortor sit amet, cursus 
             suscipit nunc.
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='blue' onClick={this.handleClose.bind(this)} >
            Okay
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

}

export default TermsAndConditionsModal;
