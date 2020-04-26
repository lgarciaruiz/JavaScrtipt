//use this instead const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

import { elements, elementStrings } from './base';

//function to clear search bar
export const clearInput = () => {
    elements.searchInput.value = '';
};

//funtion to clear prev recipes from ui
export const clearResults = () => {
    //set all html inside as empty
    elements.searchResultList.innerHTML = '';
    //clear buttons also
    elements.searchResutsPages.innerHTML = '';
};

//returns search input from user
export const getInput = () => elements.searchInput.value;

//returns shortened title preset to 17 chars
const limitRecipeTitle = (title, limit = 18) => {
    //new title array
    const newTitle = [];
    //if title is too long
    if (title.length > limit) {
        //split into array of words at space and loop through each arr element using reduce method starting at acc = 0; 0 is second param passed in
        title.split(' ').reduce((acc,cur) => {
            //new word is less than limit
            if (acc + cur.length <= limit){
                //add new word to array
                newTitle.push(cur);
            }
            //need to update acc to add the length of word added
            return acc + cur.length;
        },0);
        //join array of words into new string using a space as the joiner
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

// function to show each recipe in UI
const renderRecipe = (recipe) => {
    //create markup to show using template literall replacing dynamic content with recipe object info
    const markup = `
        <li>
            <a class="results__link" href="${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${limitRecipeTitle(recipe.title)}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}n</p>
                </div>
            </a>
        </li>
    `;

    elements.searchResultList.insertAdjacentHTML('beforeend',markup);

}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page-1 : page+1}">
    <span>Page ${type === 'prev' ? page-1 : page+1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

//show appropriate buttons
const renderButtons = (page, numResults, resultsPerPage) => {
    //set amounts of pages equal to the number of results divded by the results per page and set to ceiling so that if there are eg. 41 results we should have 5 pages total
    const pages = Math.ceil(numResults / resultsPerPage);

    //start button variable
    let button;

    if(page === 1 && pages > 1) {
        //Only button to go to next page
        button = createButton(page, 'next');
    } else if (page == pages && pages > 1){
        //Only button to go to prev page
        button = createButton(page, 'prev');
    } else {
        //Button show prev and next page; use template literal containing html code for both buttons
        button = `${createButton(page, 'prev')}
                  ${createButton(page, 'next')}`;
    };
    elements.searchResutsPages.insertAdjacentHTML('afterbegin', button);
};

//function takes in array of all recipes
export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    //algorithm to find out where in the array to start displaying results; zero based index
    const start = (page - 1) * resultsPerPage;
    //slice does not include the end so must include index past 10 elements
    const end = page * resultsPerPage;

    //if only one element no need to write whole function expression just pass in the function as the for each param; code will automatically pass in each recipe to the renderRecipe function; code is same as recipes.forEach(el => renderRecipe(el));
    //render results of current page
    recipes.slice(start, end).forEach(renderRecipe);

    //render buttons on UI
    renderButtons(page,recipes.length,resultsPerPage);
};