import React, { useContext } from 'react';
import context from '../context/context';
import Header from '../components/header';
import Footer from '../components/Footer';

function Recipes() {
  const { result } = useContext(context);
  const twelve = 12;
  const twelveMeals = result.slice(0, twelve);

  return (
    <div>
      <Header display title="Foods" />
      {
        twelveMeals.map((e, i) => (
          <div data-testid={ `${i}-recipe-card` } key={ i }>
            <p data-testid={ `${i}-card-name` }>{ e.strMeal }</p>
            <img
              data-testid={ `${i}-card-img` }
              src={ e.strMealThumb }
              alt=""
              width="200px"
            />
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default Recipes;
