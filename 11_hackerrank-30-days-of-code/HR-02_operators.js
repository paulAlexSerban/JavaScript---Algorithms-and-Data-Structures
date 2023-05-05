/**
 * Operators
 *
 * @task
 * Given the meal price (base cost of a meal), tip percent (the percentage of the meal
 * price being added as tip), and tax percent (the percentage of the meal price being
 * added as tax) for a meal, find and print the meal's total cost. Round the result
 * to the nearest integer.
 *
 * @example:
 * - meal cost = 100
 * - tip percent = 15
 * - tax percent = 9
 *
 * A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value 123 and return from the function.
 *
 * @name solve has the following parameters:
 * @arg {Integer} meal_cost: the cost of food before tip and tax
 * @arg {Integer} tip_percent: the tip percentage
 * @arg {Integer} tax_percent: the tax percentage
 *
 * @return void
 * @print calculated value, rounded to the nearest integer.
 *
 * @note Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result.
 */

const solve = (mealCost, tipPercent, taxPercent) => {
  const TOTAL_COST = mealCost + (tipPercent * mealCost) / 100 + (taxPercent * mealCost) / 100;
  const ROUNDED_COST = Math.round(TOTAL_COST);
  console.log(ROUNDED_COST);
};

const main = () => {
  const meal_cost = parseFloat(12);
  const tip_percent = parseInt(20, 10);
  const tax_percent = parseInt(8, 10);

  solve(meal_cost, tip_percent, tax_percent);
};

main();
