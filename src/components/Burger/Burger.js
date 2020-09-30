import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
  let transformedIngredeints = Object.keys(props.ingredients) //Array of the keys
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (transformedIngredeints.length === 0 ) {
    transformedIngredeints = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredeints}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}
