import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem';

import { Container, Content } from './styles'

export function CreateMovie () {
  return (
    <Container>
      <Header />
      
      <Content>
      <Link to='/'>
        <FiArrowLeft />
        <p>Voltar</p>
      </Link>

      <h1>
        Novo filme
      </h1>

      <div className='inputArea'>
        <div className='input'>
          <Input type='text' placeholder="Título" />
          <Input type='text' placeholder="Sua nota (de 0 a 5)" />
        </div>

        <Input className='observations' type='text' placeholder="Observações" />
      </div>
      

      <h2>
        Marcadores
      </h2>

      <div className='tags'>
        <NoteItem value="React" />
        <NoteItem isNew placeholder="Novo marcador" />
      </div>

      <div className='buttons'>
        <Button className="delete" title="Excluir filme"/>
        <Button title="Salvar alterações"></Button>
      </div>
    </Content>
    </Container>
  )
}