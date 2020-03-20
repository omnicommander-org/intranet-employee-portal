import React, { Component} from 'react';
import {
    Button,
    Modal, 
    ModalBody, 
    ModalFooter, 
    ModalHeader,
  } from 'reactstrap';
import Message from '../Messages/Message';
class Messages extends Component{
constructor(props)
{
    super(props); 
    this.state = {
        data: this.props.data,
        collapse: true,
        fadeIn: true,
        timeout: 300,
        modal: false,
        deleteId: null,
        sortedArray: [],
    };
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.sortMessages = this.sortMessages.bind(this);
    this.componenetDidMount = this.componentDidMount.bind(this);
} 
componentDidMount()
{
    
    this.setState({
        data: this.props.data
    });
    
}
sortMessages(theSort)
{
    
}

toggleDeleteModal(theId)
{
    this.setState({
        modal: !this.state.modal,
        deleteId: theId,
       
    });
}
    render(props, actionCall) {
        console.log(this.state.data);
        return(
        <div>
           {this.state.data}
            <ul>
               {this.items} 
            </ul>
           {this.props.data.length <= 0
            ? 'There are no notifications'
            : [...this.props.data].reverse().map((dat) => (
                
            <div key = {dat.id}>
                <Message dat = {dat} actionCall = {this.toggleDeleteModal} updateFunctions = {this.props}   />
                 {/* Delete Message Modal */}
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Warning {this.state.data}</ModalHeader>
                <ModalBody>
                    Are you sure that you would like to permenately remove this notification?
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {this.props.deleteFunc(this.state.deleteId); this.toggleDeleteModal(dat.id)}}>Yes, remove this item</Button>{' '}
                    <Button color="secondary" onClick={this.toggleDeleteModal}>Cancel</Button>
                </ModalFooter>
                </Modal>

            </div>

            ))} 
        </div>
        )
    }    
}
export default Messages;