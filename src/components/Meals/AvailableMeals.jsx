import React, { useEffect, useState } from 'react'
// Components
import Card from '../UI/Card';
import MealItem from './MealItem';
// Styles
import styles from './meals.module.css'

const AvailableMeals = () => {
  const [ meals, setMeals ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState();
  
  useEffect(() => {
    const fetchMeals = async() => {
      setIsLoading(true);
      const resp = await fetch('https://react-http-efaae-default-rtdb.firebaseio.com/Meals.json')
      const data = await resp.json();
      
      if(!resp.ok) {
        throw new Error('Something went wrong.')
      }
      
      const mealsData = [];
      for (const key in data) {
        mealsData.push({
          id: key, 
          name: data[key].name, 
          desription: data[key].description, 
          price: data[key].price})
      }

      setMeals(mealsData);
      setIsLoading(false);
    }

      fetchMeals().catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);
  
  const mealsList = meals.map(meal => <MealItem key={meal.id} meal={meal}/>);

  if (isLoading) { 
    return (
      <section>
        <h3>Loading.....</h3>
      </section>
    )
  }

  if (error) {
    return (
      <section>
        <h2>{error.message}</h2>
      </section>
    )
  }
  return (
    <div>
      <Card>
        <ul className={styles.list_container}>
          {mealsList} 
        </ul>  
      </Card>
    </div>
    )
}

export default AvailableMeals
