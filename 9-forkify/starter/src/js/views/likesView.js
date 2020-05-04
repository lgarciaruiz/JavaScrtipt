import { elements } from './base';
import { limitRecipeTitle } from './searchView'

export const toggleLikesBtn = (isLiked) => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    //selecting the use element; you can select child elements with querySelector simply add it after the class name
    //setAttribute changing the attribute of an element; select what attribute you want to change and to what
    document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconString}`);
};

export const toggleLikeMenu = (numLikes) => {
    //set visibility attribute 
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
};

export const renderLike = like => {
    const markup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="${like.title}">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">${like.author}</p>
            </div>
        </a>
    </li>
    `;
    elements.likesList.insertAdjacentHTML('beforeend',markup);
};

export const deleteLike = (id) => {
    //select all likes links based on the href attribute that have the param id
    const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    console.log(el.parentElement);
    
    if(el) el.parentElement.removeChild(el);
};
