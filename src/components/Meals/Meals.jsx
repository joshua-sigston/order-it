import React from 'react'
// Components
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
// Styles
import styles from './meals.module.css'
const Meals = () => {
  return (
    <section className={styles.meals_container}>
      <MealsSummary />
      <AvailableMeals />
    </section>
  )
}

export default Meals
