import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { Grid } from 'semantic-ui-react';


function Home() {
  const { loading, error, data: {getPosts: posts } } = useQuery(FETCH_POST_QUERY);

  if (posts) {
  console.log(posts);
  }
  

  return (
    <Grid columns={3}>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Image src='/images/wireframe/media-paragraph.png' />
      </Grid.Column>
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