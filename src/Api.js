import React,{ Component } from 'react';

class App extends Component{
  state = {
    data:[]
  }

  componentDidMount(){
    const url = "https://lab.code-cn.top/nav";

    fetch(url)
    .then(result => result.json())
    .then(result => {
        this.setState({
            data:result
        })
    })
  }

  render(){
      const {data}=this.state;

      const result = data.map((entry,index) =>{
          return <li key={index}>{entry}</li>;
      });

      return <ul>{result}</ul>
  }
}
export default App;