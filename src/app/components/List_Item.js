import React,{ Component } from 'react';

const ListItem = (props) => {
	console.log(props.users);
	if(props.users.length==0 && props.count==1){
		return (<div></div>);
	}
	else if(props.users.length==0){
		return (<div>No results found </div>);
	}
	const users = props.users.map((user) => {
		return (<a href={user.html_url} target="_blank"><li 
			 		className="list-group-item"
			 		key = {user.id}>
			 		<div className="user-list media">
			 			<div className="media-left">
			 				<img className="media-object" src={user.avatar_url}/>
			 				<span id="username">{user.login}</span>
			 			</div>
			 		</div> 
		  		</li>
		  	</a>);
	})
	return (<ul className="list-group">
			{users}
			</ul>
	);
}


export default ListItem;