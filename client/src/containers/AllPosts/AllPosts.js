import React, {Component} from 'react';
import './AllPosts.css';
import PostCreator from "../../containers/PostCreator/PostCreator";
import OnePost from "../../components/OnePost/OnePost";
import {connect} from "react-redux";
import {fetchGetPost} from "../../store/actions";

class AllPosts extends Component {


    componentDidMount = () => {
        this.props.fetchGetPost()
    };


    render () {
        return (
            <div className="AllPosts">
                {this.props.posts.map((post) => {
                    return (<OnePost
                        title={post.title}
                        content={post.content}
                        image={'http://localhost:8000/uploads/' + post.image}
                    />)
                })}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGetPost: () => dispatch(fetchGetPost()),

    }
};

export default connect (mapStateToProps, mapDispatchToProps)(AllPosts);