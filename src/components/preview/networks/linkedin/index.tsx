import React from 'react';
import { Card, Header, Container, Footer } from './style';
import Insta from '../../../../assets/linkedin.svg'; 
import Like from '../../../../assets/like.svg'; 
import Comment from '../../../../assets/comment_linkedin.svg'; 
import Arrow from '../../../../assets/arrow.svg'; 

interface Props {
    description: string,
    img: string,
  }

const Linkedin: React.FC<Props> = ({description,img}) => {
    return (
        <Card>
            <Header>
                  <div className="logo">
                    <img src={Insta} alt="Instagram" />
                  </div>
                  <div className="user">
                      <span>Damião Leonardo</span><br />
                      <span>6 de Setembro</span>
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
                     <span>5 comentarios</span>
                   </div>
                   <div className="icons">
                     <img src={Like} className="heart"  alt="heart"/>
                     <img src={Comment} className="comment" alt="comment"/>
                     <img src={Arrow} className="comment" alt="comment"/>
                   </div> 
              </div>
            </Footer>
        </Card>
    );
}

export default Linkedin;