import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from 'react-router-dom';

import { Input } from '../Input';

import { Container, Profile, Search, Brand } from './styles';

export function Header() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);

  const { signOut, user } = useAuth();
  const navigation = useNavigate();

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

  }, [search]);

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      <Link to="/">
        <Brand>
          <h1>RocketMovies</h1>
        </Brand>
      </Link>
        
      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Profile to="/profile">
        <div>
          <Link to ="/profile">{user.name}</Link>
          <button onClick={handleSignOut}>sair</button>
        </div>
        
        <img
          src={avatarUrl}
          alt={user.name}
        />
      </Profile>
    </Container>
  )
}