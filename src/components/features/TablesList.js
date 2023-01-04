import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTables } from '../../redux/tablesReducer';
import Spinner from 'react-bootstrap/Spinner';

export const TablesList = () => {
  const tables = useSelector(getAllTables);

  if (!tables.length) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      {tables.map((table) => {
        return (
          <div
            key={table.id}
            className='mt-3 py-3 d-flex align-items-end border-bottom border-2 border-secondary'
          >
            <h2 className='mr-3 mb-0'>Table {table.id}</h2>
            <p className='mx-3 mb-0'>
              <strong>Status:</strong> {table.status}
            </p>
            <Link className='ms-auto' to={`/table/${table.id}`}>
              <Button>Show more</Button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
