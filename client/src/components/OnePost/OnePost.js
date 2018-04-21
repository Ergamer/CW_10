import React, {Component} from 'react';
import './OnePost.css';

class OnePost extends Component {

    render () {
        return (
            <div className="OnePost">
                <h2>{this.props.author}</h2>
                <img src={this.props.image} alt=""/>
                <p>{this.props.date}</p>
                <button>Read full post</button>
                <button>Delete</button>
            </div>
        );
    }
}

export default OnePost;