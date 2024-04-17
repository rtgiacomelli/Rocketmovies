import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { Container, Content, NewMovie } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

export function Home() {
  return(
    <Container>
      <Header />
      
      <Content>
        <h1>
        Meus filmes
        </h1>

        <NewMovie to="/CreateMovie">
          <Button title={<><FiPlus /> Adicionar filme</>}>
          </Button>
        </NewMovie>
      </Content>

      <div className="scroll">
        <Movie filledStars={4} data={{
            title: 'Interstellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
          }}
          />

        <Movie filledStars={4} data={{
            title: 'Interstellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
          }}
          />

        <Movie filledStars={4} data={{
            title: 'Interstellar',
            description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              {id: '1', name: 'Ficção Científica'},
              {id: '2', name: 'Drama'},
              {id: '3', name: 'Família'}
            ]
          }}
          />  
      </div>

    </Container>
  );
}