import React,{ Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);

        this.initialState = {
            name:'',
            job:''
        };

        this.state = this.initialState;
    }
    render(){
        const {name,job} = this.state;
    
        return (
            <form>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChage} />
                <label>Job</label>
                <input
                  type="text"
                  name="job"
                  value={job}
                  onChange={this.handleChage} />
                <input 
                  type="button"
                  value="Submit"
                  onClick={this.submitForm} />
            </form>
        );
    }
    handleChage = event => {
        const {name,value} = event.target;

        this.setState({
            [name]:value
        });
    };
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
}
export default Form;