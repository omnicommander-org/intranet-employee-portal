import React, { Component} from 'react';
import axios from 'axios';
import {
  Button,
  FormGroup,
  Input,
  Label,
  Row,
  Card,
  CardBody,
  CardHeader, 
  Col,
  Modal, 
  ModalBody, 
  ModalFooter, 
  ModalHeader,
} from 'reactstrap';
import Messages from '../Messages/Messages';

class Dashboard extends Component {
  // initialize our state
constructor(props)
{
  super(props); 
  this.state = {
    data: [],
    collapse: true,
    fadeIn: true,
    timeout: 300,
    modalAdd: false,
    deleteId: null,
  };
  this.toggleModalAdd = this.toggleModalAdd.bind(this);
}


// when component mounts, first thing it does is fetch all existing data in our db
// then we incorporate a polling logic so that we can easily see if our db has
// changed and implement those changes into our UI
componentDidMount() {
  this.getDataFromDb();
  if (!this.state.intervalIsSet) {
    let interval = setInterval(this.getDataFromDb, 1000);
    this.setState({ intervalIsSet: interval });
  }
}

// never let a process live forever
// always kill a process everytime we are done using it
componentWillUnmount() {
  if (this.state.intervalIsSet) {
    clearInterval(this.state.intervalIsSet);
    this.setState({ intervalIsSet: null });
  }
}

// just a note, here, in the front end, we use the id key of our data object
// in order to identify which we want to Update or delete.
// for our back end, we use the object id assigned by MongoDB to modify
// data base entries

// our first get method that uses our backend api to
// fetch data from our data base
getDataFromDb = () => {
  fetch('http://localhost:3001/api/getData')
    .then((data) => data.json())
    .then((res) => this.setState({ data: res.data }));
};

// our put method that uses our backend api
// to create new query into our data base
putDataToDB = (message, title, user) => {

  let currentIds = this.state.data.map((data) => data.id);
  let idToBeAdded = 0;

  while (currentIds.includes(idToBeAdded)) {
    ++idToBeAdded;
  }
 
  axios.post('http://localhost:3001/api/putData', {
    id: idToBeAdded,
    title: title,
    message: message,
    user: user,
    addModal: false,
    
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
};

// our delete method that uses our backend api
// to remove existing database information
deleteFromDB = (idTodelete) => {
  parseInt(idTodelete);
  let objIdToDelete = null;
  this.state.data.forEach((dat) => {
    if (dat.id === idTodelete) {
      objIdToDelete = dat._id;
    }
  });

  axios.delete('http://localhost:3001/api/deleteData', {
    data: {
      id: objIdToDelete,
    },
  });
};

// our update method that uses our backend api
// to overwrite existing data base information
updateDB = (idToUpdate, updateToApply) => {
  let objIdToUpdate = null;
  parseInt(idToUpdate);
  this.state.data.forEach((dat) => {

    if (dat.id === idToUpdate) {
      objIdToUpdate = dat._id;
    }
  });

  axios.post('http://localhost:3001/api/updateData', {
    id: objIdToUpdate,
    update: updateToApply ,
  });
};
toggleModalAdd()
{
    this.setState({
      modalAdd: !this.state.modalAdd,  
    });
}


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render(props) {
  
    return (
      <div className="animated fadeIn"> 
        
        <Card>
          <Row>
            <Col sm="12" xl="12">
              <CardHeader>
                <div>
                  <h2>Fulda Employee Notifications
                    <div className="card-header-actions">
                    <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                        <option value="0">Sort</option>
                        <option value="1">Most Recent</option>
                        <option value="2">Oldest</option>
                       
                      </Input>
                      {/*eslint-disable-next-line*/}
                     
                      <Button color="secondary" onClick={this.toggleModalAdd}><i className="icon-plus"></i></Button>
                      {/*eslint-disable-next-line*/}
                    </div>
                  </h2>
                </div>
              </CardHeader>
              <CardBody>
              <Messages data = {this.state.data} deleteFunc = {this.deleteFromDB} putDataToDB = {this.deleteFromDB} updateFunc = {this.updateDB} />
              </CardBody>
            </Col>
          </Row>
        </Card>

        {/* Edit / Add Modal */}
                
        <Modal isOpen={this.state.modalAdd} toggle={this.toggleAddModal} className='modal-lg'>
        <ModalHeader toggle={this.toggle}>
            <h2>Add New Message</h2></ModalHeader>
        <ModalBody>
        <Card>
            <CardHeader>
                <strong>Add / Edit Message</strong>
                <small> Form</small>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="name">Title</Label>
                            <Input onChange={(e)=> this.setState({ title: e.target.value })} type="text" id="new-title" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <FormGroup>
                            <Label htmlFor="ccnumber">Message</Label>

                            <Input onChange={(e)=> this.setState({ message: e.target.value })} type="textarea" rows = "10" id="new-message" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">

                        <Button onClick={()=> {this.putDataToDB(this.state.message, this.state.title); this.toggleModalAdd();}} type="submit" size="sm" color="primary">Submit</Button>
                        &nbsp;
                        <Button onClick={()=> {this.toggleModalAdd();}} type="submit" size="sm" color="primary">Cancel</Button>
                    
                    </Col>
                </Row>
            </CardBody>
        </Card>

    </ModalBody>
    <ModalFooter>

    </ModalFooter>
    </Modal>
      </div>
    );
  }
}

export default Dashboard;
