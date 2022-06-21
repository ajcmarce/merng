import React from "react";
import { Card, Image, Icon, Label, Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function PostCard({ post: { body, createdAt, id, username, likeCount, commentCount, comments, likes } }) {

    function likePost() {
        console.log("I like this post!!!")
    }
    
    function commentOnPost() {
        console.log("This is a comment!!!")
    }
   
    return (
        <Card fluid>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow(true)}</Card.Meta>
                <Card.Description>
                {body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button color='teal' basic>
                        <Icon name='heart' />
                    </Button>
                    <Label as='a' basic color='teal' pointing='left'>
                        {likeCount}
                    </Label>
                </Button>
                <Button as='div' labelPosition='right' onClick={commentOnPost}>
                    <Button color='blue' basic>
                        <Icon name='comments' />
                    </Button>
                    <Label as='a' basic color='blue' pointing='left'>
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    );
}

export default PostCard;