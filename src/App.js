import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/tablesReducer';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData()), [dispatch]);

  return (
    <Container>
      <div>XD</div>
    </Container>
  );
};
