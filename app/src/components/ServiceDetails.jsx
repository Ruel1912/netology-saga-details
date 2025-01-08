import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchServiceDetailsStart } from '../redux/servicesSlice';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

export default function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServiceDetailsStart(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage text={error} retryAction={() => dispatch(fetchServiceDetailsStart(id))} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{details?.name}</h1>
      <p>{details?.content}</p>
      <p>Цена: {details?.price}</p>
      <Link to="/" className="btn btn-primary mt-2">Назад</Link>
    </div>
  );
}
