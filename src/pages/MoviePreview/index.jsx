import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';
import { Container } from './styles';
import { RatingContainer } from './styles';

export function MoviePreview() {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, [params.id]);
  
  return (
    <Container>
      <Header />
        <div className="content">
          <Link to="/">
            <FiArrowLeft />
            <p>Voltar</p>
          </Link>

          {
            data &&
            <div className="scroll">
            <div className='title'>
              <h1>{data.title}</h1>
              <RatingContainer>
                <Rating filledStars={data.rating} />
              </RatingContainer>
            </div>

            <div className='userInfo'>
              <div className="username">
                <img src="https://github.com/rtgiacomelli.png" alt="Imagem do usuário" />
                <Link className="user" to="/Profile">
                  <p>
                    Por Rodolfo Giacomelli 
                  </p>
                </Link>
              </div>
            
              <div className="dateTime">
                <p className="clock">
                  <FiClock />
                </p>
                <p className='date'>
                  23/05/22 às 08:00
                </p>
              </div>
            </div>

            {
              data.tags &&
              <div className='tags'>
                {
                  data.tags.map(tag => 
                    <Tag 
                      key={tag.id}
                      title={tag.name}
                      style={{ backgroundColor: "#282124" }}
                    />)
                }
              </div>
            }

            <p className='movieDescription'>
            {data.description}
            </p>
            </div>
          }
        </div>
    </Container>
  )
}