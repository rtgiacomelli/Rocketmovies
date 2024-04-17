import { Container, Profile, Search, Brand } from './styles'
import { Input } from '../Input'

import { Link } from 'react-router-dom';

export function Header() {
  return(
    <Container>
      <Link to="/">
        <Brand>
          <h1>RocketMovies</h1>
        </Brand>
      </Link>
        
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile to="/profile">
        <div>
          <Link to ="/profile">Rodolfo Giacomelli</Link>
          <button>sair</button>
        </div>
        
        <img src="https://github.com/rtgiacomelli.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  )
}