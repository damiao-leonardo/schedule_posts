import React from 'react';
import { Container, CardHeader } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Preview from '../../components/preview';

const PreviewMobile: React.FC = () => {

  const object = JSON.parse(JSON.stringify(localStorage.getItem('post')));;
  const post = JSON.parse(object);

  return (
    <>
      <CardHeader>
        <div className="title"><span>Visualização do post</span></div>
        <div className="close">
          <Link to="/post">
            <FontAwesomeIcon className="icon" icon={["fas", "window-close"]} />
          </Link>
        </div>
      </CardHeader>
      <Container>
        <Preview
          img={post.img}
          date={post.date}
          description={post.description}
          networks={post.networks}
        />
      </Container>
    </>
  );
};

export default PreviewMobile;