//ES6 MODULES
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
//all (*) will be imported as an object with name searchView
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';


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

//event lister to use buttons on pages; event delegation
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
});

/**
 * LIKE CONTROLLER
 */

const likeController = () => {
    //create likes obj in none exists
   if (!state.likes) state.likes = new Likes();
   const currID = state.recipe.id;
   
   // user has not liked curr recipe
   if (!state.likes.isLiked(currID)){
       //add like to state
       const newLike = state.likes.addLike(currID, state.recipe.title, state.recipe.author, state.recipe.img);
       //toggle the like button
       likesView.toggleLikesBtn(true);
       
       //add like to UI list
       likesView.renderLike(newLike);
       
   } else {
       //remove like to state
       state.likes.deleteLike(currID);
       
       //toggle the like button
       likesView.toggleLikesBtn(false);
       
       //remove like to UI list
       likesView.deleteLike(currID);
   };

   likesView.toggleLikeMenu(state.likes.getNumLiked());

};

//restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();
    state.likes.readStorage();

    // add like menu stored in local stoarage
    likesView.toggleLikeMenu(state.likes.getNumLiked());

    // show likes in the menu
    state.likes.likes.forEach(like => likesView.renderLike(like));
})


/** RECIPE CONTROLLER */

const controlRecipe = async () => {
    //get hash from window.location (URL)
    const id = window.location.hash.replace('#','');

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
            recipeView.renderRecipe(state.recipe,state.likes.isLiked(id));
            
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

//LIST CONTROLLER
const controlList = () =>{
    //create a new list if none exists
    if (!state.list) state.list = new List();

    //add each ingredient to the list and user interface
    state.recipe.ingredients.forEach(el => {
        const ingsItem = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(ingsItem);
    });
};

elements.shopping.addEventListener('click', e => {
    //retrieve id of the closest item when clicking using dataset because we used data-itemid(id)
    const id = e.target.closest('.shopping__item').dataset.itemid;
    if (e.target.matches('.shopping__delete, .shopping__delete *')){
        //delete item from data
        state.list.deleteItem(id);
        //delete item from ui
        listView.deleteItem(id);

    //update count of ingredient needed
    } else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
    };
});


// Handling Recipe Button clicks; using event delegation
elements.recipe.addEventListener('click', e => {
    //checcking to see if the click happened on the decrease or increas buttons
    //passing in class selectors; can pass multiple separated by comma;
    //using * after a class means to select any element after the class name
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {// this means did they click btn-decrease or anything inside that class
        if(state.recipe.servings > 1){
            //decrease button is clicked
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);      
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')){
        
        //decrease button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe); 
        //chech if click on add recipe button or any of it's child elements     
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')){
        likeController();
    };
});