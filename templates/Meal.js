export default class Meal {
  constructor(id,
              catId,
              title,
              afford,
              complex,
              imgURL,
              duration,
              ingredients,
              steps,
              isGlutenFree,
              isVegan,
              isVegetarian,
              isLactoseFree) {
    this.catId = catId;
    this.title = title;
    this.afford = afford;
    this.complex = complex;
    this.imgURL = imgURL;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}