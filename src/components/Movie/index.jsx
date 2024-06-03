import { Container } from './styles';
import { Tag } from '../Tag';
import { Rating } from '../../components/Rating'
import { Link } from 'react-router-dom';

export function Movie({ id, data, filledStars, ...rest }){ 
  if (!data || !data.title) {
    return null;
  }

  return (
    <Link to={`/MoviePreview/${id}`}>
      <Container {...rest}>
        <h1>{data.title}</h1>

        <Rating filledStars={filledStars} />

        <p>{data.description}</p>

        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </footer>
        }
      </Container>
    </Link>
  )
};