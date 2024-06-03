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
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/MoviePreview/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();

  }, [tagsSelected, search]);

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
        notes.map(note => {
          return (
            <Movie
              id={note.id}
              key={String(note.id)}
              data={note}
              filledStars={Number(note.rating)}
              onClick={() => handleDetails(note.id)}
            />
          );
        })
      }
    </div>

  </Container>
);
}