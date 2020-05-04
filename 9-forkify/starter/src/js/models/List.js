import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    };

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };
        this.items.push(item);
        return item;
    };

    deleteItem(id) {

        //findIndex(); returns the index of the first element that matches the element given
        const index = this.items.findIndex(el => el.id === id);

        //splice(): [2,4,8] splice(1,1) --> returns 4, original array is now [2,8]
        //different to slice: slice() is [2,4,8] slice(1,2) --> returns 4 original array stays [2,4,8]
        this.items.splice(index,1);
    };

    updateCount(id,newCount){
        //update the count of the item using find which will go find the object we're looking for and update it's count to the new count
        const item = this.items.find(el => el.id === id);
        item.count = newCount;
    };

};