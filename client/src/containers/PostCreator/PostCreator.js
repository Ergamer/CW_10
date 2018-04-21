import React, {Component} from 'react';
import './PostCreator.css';
import {connect} from "react-redux";
import {fetchPostPost} from "../../store/actions";

class PostCreator extends Component {

    state = {
        title: '',
        content: '',
        image: ''
    };

    submitFormHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.fetchPostPost(formData);
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };


    render () {
        return (
            <div className="PostCreator">
                <input
                    type="text"
                    name="title"
                    placeholder="Enter your news"
                    onChange={this.inputChangeHandler}
                />
                <textarea
                    name="text"
                    placeholder="Enter your content"
                    onChange={this.inputChangeHandler}
                ></textarea>
                <input type="file"
                       name="image"
                       placeholder="Attach your image"
                       onChange={this.fileChangeHandler}
                />
                <button onClick={this.submitFormHandler}>Save</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPostPost: (post) => dispatch(fetchPostPost(post)),

    }
};


export default connect (null, mapDispatchToProps) (PostCreator);

