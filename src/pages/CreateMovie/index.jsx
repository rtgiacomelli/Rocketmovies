import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem';
import { TextArea } from '../../components/TextArea';

import { api } from '../../services/api';

import { Container, Content } from './styles'

export function CreateMovie () {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título do filme.")
    }

    if(!rating){
      return alert("Dê uma nota ao filme.")
    }

    if(newTag){
      return alert("Você criou uma tag, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio.")
    }

    const data = {
      title,
      description,
      tags,
      rating
    };
  
    try {
      await api.post("/notes", data);
      alert("Nota criada com sucesso!");
      navigate(-1);
    } catch (error) {
      alert("Erro ao criar nota: " + error.message);
    }
  }

  return (
    <Container>
      <Header />
      
      <Content>
      <button
        onClick={handleBack}
        className="voltar">
        <FiArrowLeft />
        <p>Voltar</p>
      </button>

      <h1>
        Novo filme
      </h1>

      <div className='inputArea'>
        <Input 
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
        />
        
        <Input 
          placeholder="Sua nota (de 0 a 5)"
          type="number"
          value={rating}
          onChange={handleRatingChange}
          // onChange={handleInputChange}
        />
      </div>

      <TextArea
        className='observations'
        placeholder="Observações"
        onChange={e => setDescription(e.target.value)}
      />
      

      <h2>
        Marcadores
      </h2>

      <div className="tags">
        {
          tags.map((tag, index) => (
            <NoteItem
              key={String(index)}
              value={tag}
              onClick={() => {handleRemoveTag(tag)}}
            />
          ))
        }

        <NoteItem
          isNew
          placeholder="Novo marcador"
          onChange={e => setNewTag(e.target.value)}
          value={newTag}
          onClick={handleAddTag}
        />
      </div>

        <Button
          className="save"
          title="Salvar alterações"
          onClick={handleNewNote}
        />

    </Content>
    </Container>
  )
}