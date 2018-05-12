import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import {robots} from './robo';
import Scroll from '../components/Scroll'

class App extends Component {
constructor()
{
    super();
    this.state={
robots:[],
searchfield:''
    }
    }


    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>this.setState({robots:users}));
    }


    onSearchChange=(event)=>{
  this.setState({searchfield:event.target.value});   
}



render(){
    const{robots,searchfield}=this.state;
    const filteredRobots=robots.filter(roboinst=>{
        return roboinst.name.toLowerCase().includes(searchfield);
    
    })
    if(!robots.length){
        return <h1> LOADING </h1>
    }
    else{
    return(
        <div className='tc'>
        <h1> robos app </h1>
        <SearchBox searchChange={this.onSearchChange} />
        
    <Scroll>
         <CardList robots={filteredRobots} />
     </Scroll>    
         </div>
    );
}
}
}
 export default App;
