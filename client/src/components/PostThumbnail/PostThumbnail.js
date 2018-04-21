import React from 'react';
import {apiURL} from "../../constants";
import {Image} from "react";
import imageNotAvailable from '../';

const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
};

const PostThumbnail = props => {
    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/' + props.image;
    }

    return <Image src={image} style={styles} thumbnail />
};

export default PostThumbnail;
