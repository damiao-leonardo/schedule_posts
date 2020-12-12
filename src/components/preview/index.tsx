import React from 'react';

import { Posts } from './style';

import Instagram from './networks/instagram';
import Linkedin from './networks/linkedin';

interface Props {
  description: string,
  networks: Array<number>,
  img: string,
  date: string,
}

const Preview: React.FC<Props> = ({ networks, description, img, date }) => {

  const listPosts = networks.map((item) =>
    <>
      {(() => {
        switch (item) {
          case 1: return (
            <Instagram img={img} description={description} />
          )
          case 2: return (
            <Linkedin img={img} description={description} date={date} />
          )
        }
      })()}
    </>
  );
  return (
    <Posts>
      {listPosts}
    </Posts>
  )
}

export default Preview;