//ES6 MODULES
import Search from './models/Search';
//all (*) will be imported as an object with name searchView
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe'

/** Global state of the app
 * - Search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

/** SEARCH CONTROLLER */
//async/await function
const controlSearch = async () => {
    // 1 get Query from view
    const query = searchView.getInput(); 
    //console.log(query);
    
    
    //when new query comes in; check if truthy
    if (query) {
        // 2 new search object and add to state object as search property
        state.search = new Search(query);
        
        // 3 prpare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);
        
        try{
            // 4 get recipes using the saved search in state
            await state.search.getResults();
    
            // 5 render recipes result on UI
            clearLoader(elements.searchResults);
            searchView.renderResults(state.search.recipes);    
        }
        catch (error){
            alert('something went wrong with the search');
            console.log(error);
            clearLoader();
        }
    }

}

//event listener for search form
elements.searchForm.addEventListener('submit', e => {
    //prevent reloading page
    e.preventDefault();
    
    //call search function
    controlSearch();
});

//event lister to use buttons on pages
elements.searchResutsPages.addEventListener('click', e => {
    //use closest to select the closest element heading up the DOM tree that matches the given string
    const btn = e.target.closest('.btn-inline');
    //if btn exists and is pressed
    if (btn) {
        //@closest
        searchView.clearResults();
        //set constant to read data value from button that is clicked and turn it to an int that is based on 10 not binary
        //using @data
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.renderResults(state.search.recipes, goToPage); 
    }    
})


/** RECIPE CONTROLLER */

const controlRecipe = async () => {
    //get hash from window.location (URL)
    const id = window.location.hash.replace('#','');
    console.log(id);
    
    //check if we have ID
    if (id){
        //prepare UI for changes             
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //highlight selected
        if (state.search){
            searchView.highlightSelected(id);
        } 

        //create new recipe object
        state.recipe = new Recipe(id);

        //get recipe data
        try{

            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
    
            //calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
    
            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        }
        catch (error) {
            console.log(error);
            alert('Error processing recipe!')
        }
        
    }
}

//adding multiple events to for the same function can be done with a forEach loop if the events are in an array
// window.addEventListener('hashchange',controlRecipe);
// window.addEventListener('load', controlRecipe);

//when the screen loads or the hashchanges the recipe controller will be called
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
