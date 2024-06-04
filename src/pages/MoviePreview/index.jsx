import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';
import { Container } from './styles';
import { RatingContainer } from './styles';
import { Button } from '../../components/Button';

export function MoviePreview() {
  const [data, setData] = useState(null);
 
  const params = useParams();
  const navigate = useNavigate();
  
  const { user } = useAuth();

  function handleBack() {
    navigate(-2);
  };

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");
    
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-2);
    }
  }

  function handleClickProfile() {
    navigate('/Profile');
  };

  function formatDate(date) {
    const dateFormat = new Date(date);
    const formattedDate = dateFormat.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  });

  const splittedDate = formattedDate.split(',');
  const formattedDateString = splittedDate[0] + ' às ' + splittedDate[1];

  return formattedDateString;
  };

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);

      response.data.updated_at = formatDate(response.data.updated_at);

      setData(response.data);
    }

    fetchMovie();

  }, []);
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return (
    <Container>
      <Header />
        <div className="content">
          <button onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </button>

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
                <img 
                  src={avatarUrl}
                  alt={user.name}
                />
                <button className="user" onClick={handleClickProfile}>
                  <p>
                    Por {user.name}
                  </p>
                </button>
              </div>
            
              <div className="dateTime">
                <p className="clock">
                  <FiClock />
                </p>
                <p className='date'>
                  {data.updated_at}
                </p>
              </div>
            </div>

            {
              data.tags &&
              <div className='tags'>
                {
                  data.tags.map(tag => 
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name}
                      // style={{ backgroundColor: "#282124" }}
                    />
                  )
                }
              </div>
            }

            <p className='movieDescription'>
            {data.description}
            </p>
            </div>
          }

          <Button
            className="delete"
            title="Excluir filme"
            onClick={handleRemove}
          />

        </div>

    </Container>
  )
}