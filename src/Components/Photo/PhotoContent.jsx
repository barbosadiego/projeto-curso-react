import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';

const PhotoContent = ({ data }) => {
  const { photo, commemts } = data;
  return (
    <div className={styles.photo}>
      <img className={styles.img} src={photo.src} alt={photo.title} />
      <div className={styles.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} commemts={commemts}/>
    </div>
  );
};

export default PhotoContent;
