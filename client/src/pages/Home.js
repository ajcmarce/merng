import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Grid } from 'semantic-ui-react';

import PostCard from '../components/PostCard';


function Home() {
  const { loading, error, data } = useQuery(FETCH_POST_QUERY);
  
  return (
    <Grid columns={3}>
      <Grid.Row className='page-title'>
        <h1>Recent Posts</h1>
      </Grid.Row>
    <Grid.Row>
      { loading ? (<h1>Loading ...</h1>) : (data.getPosts && data.getPosts.map(post => (
        <Grid.Column key={post.id} style={{marginBottom: 20}}>
          <PostCard post={post} />
        </Grid.Column>
      )))}
    </Grid.Row>
    </Grid>
  )
}

const FETCH_POST_QUERY = gql`
  {
    getPosts{
      id
      username
      body
      createdAt
      commentCount
      comments{
        id
        username
        body
        createdAt
      }
      likeCount
      likes{
        id
        username
        createdAt
      }
    }  
  }
`;

export default Home;