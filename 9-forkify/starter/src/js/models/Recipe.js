import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try{
            //returns a promise
            const result = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            //console.log(result);
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
            
        }
        catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    calcTime() {
        //assuming that we need 15 min for each 3 ingredients
        const numIngByThree = Math.ceil(this.ingredients.length/3);
        this.time = numIngByThree * 15;
    };

    calcServings() {
        this.servings = 4;
    };

    parseIngredients() {
        const unitslong = ['tablespoons','tablespoon','ounces','ounce','teaspoons','teaspoon','cups','pounds'];
        const unitsShort = ['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound'];
        //destructure units short and add kg, g to this array
        const units = [...unitsShort, 'kg','g'];
        
        //create a new array with map; this goes over all elements and returns a new array with the info you set as the return
        const newIngredients = this.ingredients.map(el => {
            // 1. uniform units
            let ingredient = el.toLowerCase();
            //use forEach method to go over measuring units you want to replace
            unitslong.forEach((unit,i) => {
                //replace any units using the long measurments with the short version of it
                ingredient = ingredient.replace(unit, units[i]);
            });
            // 2. remove parens
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3. parse ingredients into count, unit and ingredient
            //split into array at space
            const arring = ingredient.split(' ');
            //findIndex method with call back that returns true if the el2 is included in the unitsShort array
            const unitIndex = arring.findIndex(el2 => unitsShort.includes(el2));

            let objIngredient;
            if(unitIndex > -1) {
                //there is a measuring unit

                //create array from beginning to unitindex to check the length
                //ex 4 1/2 cups, arrCount is [4, 1/2]
                //ex 4 cups, arrCount is [4]
                const arrCount = arring.slice(0, unitIndex);

                let count;
                if (arrCount.length === 1) {
                    //replace - with + and evaluate it to return the correct count
                    count = eval(arring[0].replace('-','+'));
                } else {
                    //join the strings using the plus symbol then using eval will evaluate the string as if it were reading javascript code so adding for example 4+1/2 = 4 1/2
                    count = eval(arring.slice(0, unitIndex).join('+'));
                };

                objIngredient = {
                    count,
                    unit: arring[unitIndex],
                    ingredient: arring.slice(unitIndex+1).join(' ').trim(),
                }

            } else if (parseInt(arring[0], 10)) {
                //there is no unit but first element is a number
                objIngredient = {
                    count: parseInt(arring[0]),
                    unit: '',
                    //when the property of an object is the same name as the variable and they will have the same value no need to list as property: propertyValue
                    ingredient: arring.slice(1).join(' ').trim(),
                }
            } else {
                // no unit and no number
                objIngredient = {
                    count: 1,
                    unit: '',
                    //when the property of an object is the same name as the variable and they will have the same value no need to list as property: propertyValue
                    ingredient: ingredient.trim(),
                }
            }

            return objIngredient;
        });
        this.ingredients = newIngredients;
    };

    updateServings (type) {
        //set newServings to plus or minus 1 depending on the type passed in
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        //update ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings/this.servings);
        })

        this.servings = newServings;
    }
};