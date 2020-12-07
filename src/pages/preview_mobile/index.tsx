import React, { Component } from 'react';
import { Container, CardHeader } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import Preview from '../../components/preview';
import { Network } from '../post/style';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PreviewMobile: React.FC = (props) => {

  let query = useQuery();

  console.log(query);
  console.log(props.children);

  const fileURL = "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
  const selectedDescription = "vamos que vamos";
  const selectedNetwork = [1, 2];

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
          img={fileURL}
          description={selectedDescription}
          networks={selectedNetwork}
        />
      </Container>
    </>
  );
};

export default PreviewMobile;