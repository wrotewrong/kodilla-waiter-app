import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { SingleTable } from './components/features/SingleTable';
import { Header } from './components/views/Header';
import { Footer } from './components/views/Footer';

import { fetchData } from './redux/tablesReducer';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<SingleTable />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};
