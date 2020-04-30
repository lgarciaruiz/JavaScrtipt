//exporting all DOM elements from this file
export const elements = {
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchResultList: document.querySelector('.results__list'),
    searchResults: document.querySelector('.results'),
    searchResutsPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
};

//DOM string elements ie classes/ids
export const elementStrings = {
    loader: 'loader',
};

//show loading icon
export const renderLoader = (parent) => {
    //create div with svg icon
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    //insert after parent div
    parent.insertAdjacentHTML('afterbegin',loader);
};

//remove loading icon
export const clearLoader = () => {
    //set loader constant to it's class
    const loader = document.querySelector(`.${elementStrings.loader}`);
    //if loading icon exists
    if (loader){
        //move up to parent element to remove loading icon div
        loader.parentElement.removeChild(loader);
    };
};