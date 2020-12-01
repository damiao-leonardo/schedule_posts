import React from 'react';

import { Posts } from './style';

import Instagram from './networks/instagram';
import Linkedin from './networks/linkedin';

interface Props {
  description: string,
  networks: Array<number>,
  img: string,
}

const Preview: React.FC<Props> = ({ networks, description, img }) => {

  const listPosts = networks.map((item) =>
    <>
      {
        (item === 1) ? (
          <Instagram img={img} description={description} />
        ) : (
            <Linkedin img={img} description={description} />
          )
      }
    </>
  );
  return (
    <Posts>
      {listPosts}
    </Posts>
  )
}

export default Preview;