import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesStart } from '../redux/servicesSlice';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

export default function ServicesList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServicesStart());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage text={error} retryAction={fetchServicesStart} />;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Услуги</h1>
      <ul className="list-disc ml-4">
        {list.map((service) => (
          <li key={service.id}>
            <Link to={`/${service.id}/details`} className="text-blue-500">
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
