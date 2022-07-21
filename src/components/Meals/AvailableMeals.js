import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Classic Espresso ",
    description: "Strong...invigorating...",
    price: 100,
  },
  {
    id: "m2",
    name: "Americano",
    description: "Boald..strong...",
    price: 120,
  },
  {
    id: "m3",
    name: "Machiato",
    description: "Glossy...perfect!",
    price: 150,
  },
  {
    id: "m4",
    name: "House coffee",
    description: "Original..off..thecurb",
    price: 90,
  },
  {
    id: "m5",
    name: "Mocha",
    description: "Fine finish...",
    price: 220,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
