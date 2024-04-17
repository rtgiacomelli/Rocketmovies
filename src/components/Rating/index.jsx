import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

import { Container } from './styles';

export function Rating({ filledStars }) {
  
  const filledStarArray = Array.from({ length: filledStars }, (_, index) => index + 1);

  const emptyStarArray = Array.from({ length: 5 - filledStars }, (_, index) => index + filledStars + 1);

  return (
    <Container>
      {filledStarArray.map((index) => (
        <TiStarFullOutline key={`filled-${index}`} />
      ))}
      {emptyStarArray.map((index) => (
        <TiStarOutline key={`empty-${index}`} />
      ))}
    </Container>
  );
}
          