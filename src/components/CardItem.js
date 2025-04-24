import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <h5 className='cards__item__text'>{props.text}</h5>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt={props.alt}
              src={props.src}
              onClick={props.onClick}
            />
          </figure>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
