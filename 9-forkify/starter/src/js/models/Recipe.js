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
}