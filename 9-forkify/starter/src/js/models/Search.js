//importing from package only requires package name
import axios from 'axios';

//Simple data model for search results
//will contain the query made; all object results; and recipes found
export default class Search {
    //requires a search for a type of food
    constructor(query) {
        this.query = query;
    }

    //Asynchronous method; does not need function keyword inside the class
    async getResults(){
        
        //no key needed for this api call
        try{
            
            // await results of api call using query param
            const results = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            
            // create recipe var and set it to recipes found for this query
            this.recipes = results.data.recipes;
            
            // console.log(this.recipes);
        
        } catch (error) {
            
            //alert any error found
            alert(error);
        }
        
    }
}
