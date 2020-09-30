import React from "react";

import classes from "./Order.module.css";

export default function Order(props) {
  let ingredients = [];

  for (let ingredeintName in props.ingredients) {
    ingredients.push({
      name: ingredeintName,
      amount: props.ingredients[ingredeintName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: '1px solid #ccc',
          padding: '5px'

        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>{props.price.toFixed(2)}&euro;</strong>
      </p>
    </div>
  );
}
