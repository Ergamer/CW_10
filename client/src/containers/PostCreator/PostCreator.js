import React, {Component} from 'react';
import './PostCreator.css';
import {connect} from "react-redux";


class PostCreator extends Component {


    state = {
        title: '',
        content: '',
        image: ''
    };


    contactValueChanged = (event) => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return (
            <form className="PostCreator" action="">
                <div>Title<input
                    name="name"
                    value={this.state.title}
                    onChange={this.contactValueChanged}
                    type="text"/>
                </div>
                <div>Content<input
                    value={this.state.content}
                    onChange={this.contactValueChanged}
                    name="content"
                    type="text"/>
                </div>
                <div>Image
                    <input
                        value={this.state.image}
                        onChange={this.contactValueChanged}
                        name="image"
                        type="text"/>
                </div>
                <button onClick={(e) => this.props.saveContactChanges(e, this.state)}>Save</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        saveContactChanges: (e, contacts) => dispatch(saveContactChanges(e, contacts))
    }
};


export default connect (mapStateToProps, mapDispatchToProps) (PostCreator);

