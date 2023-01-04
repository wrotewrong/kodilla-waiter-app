import { TablesList } from '../features/TablesList';

export const Home = () => {
  return (
    <div>
      <h1 className='my-3'>
        <strong>All tables</strong>
      </h1>
      <TablesList></TablesList>
    </div>
  );
};
