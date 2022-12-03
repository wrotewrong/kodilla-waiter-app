import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesReducer';

export const TablesList = () => {
  const tables = useSelector(getAllTables);

  return (
    <div>
      <h1 className='my-3'>
        <strong>All tables</strong>
      </h1>
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
            <Button className='ms-auto'>Show more</Button>
          </div>
        );
      })}
    </div>
  );
};
