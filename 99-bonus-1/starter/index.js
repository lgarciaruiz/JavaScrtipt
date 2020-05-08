//THIS IS FOR TESTING

// console.log('hey there');

// console.log('hey again');
// console.log('hey again again');

//core module to read files
const fs = require('fs');

//core module to create server
const http = require('http'); 

//core module for url routing
const url = require('url');

//readign a file; here we used the synchrounous version of readfile because this was the start of the code and the application so the you can't run anything until this loads
const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
//console.log(json);
//laptop data will contain all the laptop info in the json folder
const laptopData = JSON.parse(json);
//console.log(laptopData);

//creating a server using the creatServer method on the http object
//callback function is needed  and will fire anytime someone access the web; callback has access to the request and responsr objects
const server = http.createServer((req, res) => {
    //this code returns the url name of the request made to the server
    const pathName = url.parse(req.url, true).pathname;
    //console.log(pathName);
    //retrieve query; part of url where we see ?id=
    const query = url.parse(req.url, true).query.id;
    //console.log(url.parse(req.url, true));
    

    // check the pathnam to redirect to appropriate page
    if (pathName === '/products' || pathName === '/'){
        //when someone accesses the server they will get a response written to the header of 200 (saying we have a respsonse: ok) with content type text html
        //you can see this response in the network tab of dev tools by reloading
        //chainging this header to something like 404 will indicate an error
        res.writeHead(200, {'Content-Type': 'text/html'});
        //send the response itself after setting the header
        fs.readFile(`${__dirname}/templates/template - overview.html`,'utf-8', (err, data) => {

            let overviewOutput = data;

            //read card template after overview template has been read; data param is the param that contains the info read from the file
            fs.readFile(`${__dirname}/templates/template - card.html`,'utf-8', (err, data) => {
                //for each laptop info change the original html from template - card; replace with real dtat
                const cardsOutput = laptopData.map( el => 
                    //map returns an array so join on a space
                    replaceTemplate(data, el)).join(' ');
                    //console.log(cardsOutput);
                
                    //replace original html from overview main page where it says cards with the actual cards generated with cardsOuput
                    overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);

                    res.end(overviewOutput);
            });

        });
    }

    //test if the page name cotains an image file name
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)){
        //read file with the name of the image
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            //show the response of ok(200) with the conent type
            res.writeHead(200, { 'Content-type': 'image/jpg'});
            //respond to the request with the info found on data
            res.end(data);
        })
    }

    //check pathname as well as make sure query ID is not bigger than the amount of data or pages available
    else if (pathName === '/laptop' && query < laptopData.length){
        res.writeHead(200, {'Content-Type': 'text/html'});
        //this readFile is asynchrounous and will read the data from the file with utf-8 the callback gets access to error and data params; once the file is read it will be passed in as data
        fs.readFile(`${__dirname}/templates/template - laptop.html`,'utf-8', (err, data) => {
            const laptop = laptopData[query];
            res.end(replaceTemplate(data,laptop));
        });
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('URL WAS NOT FOUND');
    };
});

//2nd part of creating a server; add the listen method which will always be listening on a certain port on a certain ip
//standard port is 1337; standard ip is localhost(127.0.0.1) - current computer
server.listen(1337,'127.0.0.1', ()=> {
    console.log('listening Now');  
}); //after you do this you can go to that ip address and port in a browser and it will record a visit!

//funtion to replact html vars with laptop data
function replaceTemplate(oringalHTML,laptop){
    let output = oringalHTML.replace(/{%PRODUCTNAME%}/g,laptop.productName);
            //here you replace the word in output from above so that you maintain the previous replace string
            output = output.replace(/{%IMAGE%}/g,laptop.image);
            output = output.replace(/{%PRICE%}/g,laptop.price);
            output = output.replace(/{%SCREEN%}/g,laptop.screen);
            output = output.replace(/{%CPU%}/g,laptop.cpu);
            output = output.replace(/{%RAM%}/g,laptop.ram);
            output = output.replace(/{%STORAGE%}/g,laptop.storage);
            output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
            output = output.replace(/{%ID%}/g,laptop.id);
            return output;
}