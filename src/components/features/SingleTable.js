import { useParams } from 'react-router-dom';
import { Button, FormLabel, FormSelect, FormControl } from 'react-bootstrap';
import { getTableById } from '../../redux/tablesReducer';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const SingleTable = () => {
  const { id } = useParams();
  const table = useSelector((state) => getTableById(state, id));

  const [status, setStatus] = useState(table.status);
  const [currentPeople, setCurrentPeople] = useState(table.currentPeople);
  const [maxPeople, setMaxPeople] = useState(table.maxPeople);
  const [bill, setBill] = useState(table.bill);

  const handleStatus = (value) => {
    if (value === 'Busy') {
      setBill('0');
    }
    if (value === 'Free' || value === 'Cleaning') {
      setCurrentPeople('0');
    }
    setStatus(value);
  };

  const handleCurrentPeople = (value) => {
    if (value < 0) {
      value = '0';
    }

    if (value > Number(maxPeople)) {
      value = maxPeople;
    }

    setCurrentPeople(value);
  };

  const handleMaxPeople = (value) => {
    if (value < 0) {
      value = '0';
    }

    if (value > 10) {
      value = '10';
    }

    setMaxPeople(value);

    if (Number(currentPeople) > value) {
      setCurrentPeople(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({
      status: status,
      currentPeople: currentPeople,
      maxPeople: maxPeople,
      bill: bill,
    });
  };

  return (
    <form onSubmit={(e) => handleUpdate(e)}>
      <h1 className='my-3'>
        <strong>Table {table.id}</strong>
      </h1>

      <div className='mt-4 d-flex w-50 align-items-center'>
        <FormLabel className='mb-0 me-3'>
          <strong>Status:</strong>
        </FormLabel>
        <FormSelect
          value={status}
          onChange={(e) => handleStatus(e.target.value)}
        >
          <option value='Free'>Free</option>;
          <option value='Reserved'>Reserved</option>;
          <option value='Busy'>Busy</option>;
          <option value='Cleaning'>Cleaning</option>;
        </FormSelect>
      </div>

      <div className='mt-4 d-flex w-25 align-items-center'>
        <FormLabel className='mb-0 me-2'>
          <strong>People:</strong>
        </FormLabel>
        <FormControl
          value={currentPeople}
          onChange={(e) => handleCurrentPeople(e.target.value)}
          type='text'
          className='w-25 text-center'
        />
        <p className='mx-2 mb-0'>/</p>
        <FormControl
          value={maxPeople}
          onChange={(e) => handleMaxPeople(e.target.value)}
          type='text'
          className='w-25 text-center'
        />
      </div>

      {status === 'Busy' ? (
        <div className='mt-4 d-flex w-25 align-items-center'>
          <FormLabel className='mb-0 me-4'>
            <strong>Bill:</strong>
          </FormLabel>
          <p className='me-1 mb-0'>$</p>
          <FormControl
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            type='text'
            className='w-25 text-center'
          />
        </div>
      ) : (
        ''
      )}

      <Button type='submit' className='mt-4'>
        Update
      </Button>
    </form>
  );
};
