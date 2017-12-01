import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Users from './config/users.js';
import moment from 'moment';

class SocialCard extends React.Component {
	render() {
		return (
			<div className="social-card">
				<div className="social-card-header">
					<img alt="User " src="/images/user.png"/>
					<div className="title">
						<div className="user-name">{this.props.name}</div>
						<div className="post-time">{this.props.time}</div>
					</div>
				</div>
			</div>
		)
	}
}


class SocialApp extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			name : null,
			time : null,
			index : 0
		}
	}

	setUserData(){	
		console.log(Users.users);
		
		this.setState({name : Users.users[this.state.index].name, time : moment().format("hh:mm a"), index : this.state.index+1});
	}

	renderCard(){
		return <SocialCard name={this.state.name} time ={this.state.time}/>
	}
	render(){
		return (

			
			<div className="social-app">
				<div onClick={() => this.setUserData()}>
					Set User Data
				</div>
				{this.renderCard()}
			</div>
		)
	}
}

ReactDOM.render(
  <SocialApp />,
  document.getElementById('root')
);