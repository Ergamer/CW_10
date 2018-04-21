import React, { Component } from 'react';
import './App.css';
import AllPosts from "./containers/AllPosts/AllPosts";
import Header from "../src/components/Header/Header";
import {Switch, Route} from "react-router-dom";
import PostCreator from "./containers/PostCreator/PostCreator";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/pages/contacts" exact component={AllPosts}/>
                    <Route path="/pages/:id" exact component={PostCreator}/>
                </Switch>
            </div>
        );
    }
}

export default App;
