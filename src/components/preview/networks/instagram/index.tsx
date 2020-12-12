import React from 'react';
import { Card, Header, Container, Footer } from './style';
import Insta from '../../../../assets/insta.svg';
import Heart from '../../../../assets/heart.svg';
import Comment from '../../../../assets/comment.svg';
import Share from '../../../../assets/share.svg';

interface Props {
  description: string,
  img: string,
}

const Instagram: React.FC<Props> = ({ description, img }) => {
  return (
    <Card>
      <Header>
        <div className="logo">
          <img src={Insta} alt="Instagram" />
        </div>
        <div className="user">
          <strong>Damião Leonardo</strong>
        </div>
      </Header>
      <Container>
        <img src={img} alt="Container" />
      </Container>
      <Footer>
        <div className="icons">
          <div className="first">
            <img src={Heart} className="heart" alt="heart" />
            <img src={Comment} className="comment" alt="comment" />
          </div>
          <div className="secund">
            <img src={Share} className="share" alt="share" />
          </div>
        </div>
        <div className="description">
          <span>{description}</span>
        </div>
      </Footer>
    </Card>
  );
}

export default Instagram;