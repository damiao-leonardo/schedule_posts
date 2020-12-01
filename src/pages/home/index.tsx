import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';
import post from '../../assets/post.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={post} alt="Post"></img>
      </div>
      <section>
        <Link to="/post" >
          <span>Agendar post</span>
        </Link>
      </section>
    </Container>
  );
};

export default Home;