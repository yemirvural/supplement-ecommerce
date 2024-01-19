import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5';

export const star = (point) => {
  const stars = [];
  let empty = 0;
  let half = 0;

  if (point > 5) return NaN;
  
  while (point > 0) {
    point = Math.round(point * 2) / 2;
    if (String(point).length > 1) {
      half = 1;
      stars.push(<IoStarHalf size={25} color='#ffd200' />);
      point = Math.floor(point);
    }
    empty = 5 - point - half;
    for (let i = 0; i < point; i++) {
      stars.unshift(<IoStar size={25} color='#ffd200' />);
    }
    for (let i = 0; i < empty; i++) {
      stars.push(<IoStarOutline size={25} color='#ffd200' />);
    }
    point = 0;
  }

  return stars;
};