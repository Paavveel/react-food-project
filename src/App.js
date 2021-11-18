import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';
import Layout from './layout/Layout';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contact />} />
          <Route path='category/:name' element={<Category />} />
          <Route path='category/:name/meal/:id' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
