import React, { Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Label,
    Input,
  } from 'reactstrap';
import Moment from 'react-moment';


class Message extends Component{
constructor(props)
{
    super(props); 
    
    this.state = {
        editMessage: true, 
        title: this.props.dat.title,
        message: this.props.dat.message,
        createdAt: this.props.dat.createdAt,

    };
    this.toggleMessageEdit = this.toggleMessageEdit.bind(this);
    
}    
toggleMessageEdit()
{
    this.setState({
    editMessage: !this.state.editMessage,
    title: this.state.title,
    });

}
    render(props) {  
        const { dat } = this.props.dat; 
        return(
        <div>
        {this.state.editMessage ? (
          <Card>
            <CardHeader>
                <h4>{this.state.title}
                    <div className="card-header-actions">
                        {/*eslint-disable-next-line*/}
                        <a className="card-header-action btn btn-setting" onClick={() => this.toggleMessageEdit()}><i className="icon-settings"></i></a>
                        {/*eslint-disable-next-line*/}
                        <a className="card-header-action btn btn-minimize" onClick={() => this.props.actionCall(this.id)}><i className="icon-trash"></i></a>
                    </div>
                </h4>  
            </CardHeader>
            <CardBody>
                <div className = "messageContainer">    
                    {this.state.message}
                </div>
                <br />
                <div className = "timeStamp float-right text-right">
                    Posted: <Moment format="MMMM Do YYYY, h:mm:ss a">{this.state.createdAt}</Moment><br />
                    Last Update: <Moment format="MMMM Do YYYY, h:mm:ss a">{this.state.updatedAt}</Moment>
                </div>
            </CardBody>
          </Card> 
          
          ):(
         
          <Card>
            <CardHeader>
               <h4>Edit Message</h4>
            </CardHeader>
            <CardBody>
                <FormGroup>
                <Label htmlFor="name"><strong>Title</strong></Label>
                    <FormGroup>   
                      <Input onChange={(e) => this.setState({ title: e.target.value })} type="text" id="name" defaultValue={this.state.title}/>
                </FormGroup>
                    <Label htmlFor="ccnumber"><strong>Message</strong></Label>
                    <Input  type="textarea" rows="5" id="theMessage" placeholder="" defaultValue={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}/>
                </FormGroup>
                <Button onClick={() => {this.props.updateFunctions.updateFunc(this.props.dat.id, this.state.title); this.toggleMessageEdit()}} type="submit" size="sm" color="primary">Submit</Button>
            </CardBody>
          </Card> 
          )}
        </div>
        )
    }    
}
export default Message;