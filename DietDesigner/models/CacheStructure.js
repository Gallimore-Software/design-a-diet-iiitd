class CacheStructure {
/*
This class acts as a structure for the async storage manuplation.
*/

    constructor(name, carbs, fat, proteins, calories) {
        this.name = name;
        this.carbs = carbs;
        this.fat = fat;
        this.proteins = proteins;
        this.calories = calories;
    }

    getName() {
        return this.name;
    }

    getNutrients() {
        return {
            carbs: this.carbs,
            fat: this.fat,
            proteins: this.proteins,
            calories: this.calories
        }
    }

    getAll() {
        return {
            name: this.name,
            carbs: this.carbs,
            fat: this.fat,
            proteins: this.proteins,
            calories: this.calories
        }
    }


}

export default CacheStructure;