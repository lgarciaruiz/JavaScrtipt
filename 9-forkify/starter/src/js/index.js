//ES6 MODULES
import Search from './models/Search';
//all (*) will be imported as an object with name searchView
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/** Global state of the app
 * - Search object
 * - current recipe object
 * - shopping list object
 * - liked recipes
 */
const state = {};

//async/await function
const controlSearch = async () => {
    // 1 get Query from view
    const query = searchView.getInput(); 
    console.log(query);
    
    
    //when new query comes in; check if truthy
    if (query) {
        // 2 new search object and add to state object as search property
        state.search = new Search(query);
        
        // 3 prpare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResults);
        
        // 4 get recipes using the saved search in state
        await state.search.getResults();

        // 5 render recipes result on UI
        clearLoader(elements.searchResults);
        searchView.renderResults(state.search.recipes);
        
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
