export default class Likes {
    constructor() {
        this.likes = [];
    };

    //add like method
    addLike(id, title, author, img){
        const like = {
            id,
            title,
            author,
            img
        };

        this.likes.push(like);

        //presist data in localStorage
        this.persistData();

        return like;
    };

    //delete like method
    deleteLike(id){
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        //persist data in localStorage
        this.persistData();
    };

    //selects liked recipe
    isLiked(id){
        //return true or false depending on whether the recipe passed in was liked
        return this.likes.findIndex(el => el.id === id) !== -1;
    };

    //get number of like
    getNumLiked() {
        return this.likes.length;
    };

    persistData() {
        //JSON.stringify will convert an array into a string
        localStorage.setItem('likes', JSON.stringify(this.likes))
    };

    readStorage() {
        //parse string array
        const storage = JSON.parse(localStorage.getItem('likes'));

        //restore likes form localStorage
        if (storage) {
            this.likes = storage;
        };
    };
};