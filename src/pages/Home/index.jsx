import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'

import { api } from '../../services/api'

import { Container, Content, NewMovie } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

export function Home() {
  
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleMoviePreview(id) {
    navigate(`/MoviePreview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();

  }, []);

  return (
  <Container>
    <Header />

    <Content>
      <h1>Meus filmes</h1>

      <NewMovie to="/CreateMovie">
        <Button title={<><FiPlus /> Adicionar filme</>}>
        </Button>
      </NewMovie>
    </Content>

    <div className="scroll">
      {
        movies.map(note => {
          return (
            <Movie
              id={note.id}
              key={String(note.id)}
              data={note}
              filledStars={Number(note.rating)}
              onClick={() => handleMoviePreview(note.id)}
            />
          );
        })
      }
    </div>

  </Container>
);
}