import React,{ Component } from "react";
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Room from "./Room";

export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <Router>
            <Switch>
                <Route exact path="/">
                    <p>This is the home page</p>
                </Route>
                <Route path="/join" component={RoomJoinPage}></Route>
                <Route path="/create" component={CreateRoomPage}></Route>
                <Route path="/room/:roomCode" component={Room}></Route>
            </Switch>
        </Router>;
    }
}