import React from 'react';
import { Card, Header, Container, Footer } from './style';
import Insta from '../../../../assets/linkedin.svg';
import Like from '../../../../assets/like.svg';
import Comment from '../../../../assets/comment_linkedin.svg';
import Arrow from '../../../../assets/arrow.svg';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';

interface Props {
  description: string,
  img: string,
  date: string,
}

const Linkedin: React.FC<Props> = ({ description, img, date }) => {

  const formattedDate = format(
    new Date(date),
    "' 'dd 'de' MMMM' '",
    { locale: pt }
  );
  return (
    <Card>
      <Header>
        <div className="logo">
          <img src={Insta} alt="Instagram" />
        </div>
        <div className="user">
          <span>Damião Leonardo</span><br />
          <span>{formattedDate}</span>
        </div>
      </Header>
      <Container>
        <div className="description">
          <span>{description}</span>
        </div>
        <img src={img} alt="Container" />
      </Container>
      <Footer>
        <div className="card_footer">
          <div className="comment">
            <span>0 comentarios</span>
          </div>
          <div className="icons">
            <img src={Like} className="heart" alt="heart" />
            <img src={Comment} className="comment" alt="comment" />
            <img src={Arrow} className="comment" alt="comment" />
          </div>
        </div>
      </Footer>
    </Card>
  );
}

export default Linkedin;