import { useParams } from 'react-router-dom';
import { Button, FormLabel, FormSelect, FormControl } from 'react-bootstrap';
import { getTableById } from '../../redux/tablesReducer';
import { useSelector } from 'react-redux';

export const SingleTable = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));

  return (
    <div>
      <h1 className='my-3'>
        <strong>Table {table.id}</strong>
      </h1>

      <div className='mt-4 d-flex w-50 align-items-center'>
        <FormLabel className='mb-0 me-3'>
          <strong>Status:</strong>
        </FormLabel>
        <FormSelect></FormSelect>
      </div>

      <div className='mt-4 d-flex w-25 align-items-center'>
        <FormLabel className='mb-0 me-2'>
          <strong>People:</strong>
        </FormLabel>
        <FormControl className='w-25' />
        <p className='mx-2 mb-0'>/</p>
        <FormControl className='w-25' />
      </div>

      <div className='mt-4 d-flex w-25 align-items-center'>
        <FormLabel className='mb-0 me-4'>
          <strong>Bill:</strong>
        </FormLabel>
        <p className='me-1 mb-0'>$</p>
        <FormControl className='w-25' />
      </div>

      <Button className='mt-4'>Update</Button>
    </div>
  );
};
