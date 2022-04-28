import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET2 } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Erro from '../Help/Erro';
import Loading from '../Help/Loading';
import PhotoContent from './PhotoContent';

const Photo = (props) => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET2(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Erro error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
