 const net = require("net");


app.use(express.json());


//GET Request Handlers
//  Recieve the initial json from client with targer, radius and category
//  NEED TO CHECK IF I CAN SEND THE LOCATIONS BACK HERE INSTEAD OF POST REQUEST IN LINE 37
app.get('/api/location', (req, res) => { // fill in url
    res.send('') // send msg;
});
 

//  Recieve a suggested description of a place from the user 
app.get('/api/description', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id)); // searching for specific item
 
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>'); // error msg
        res.send(book); // send resolve
});


//POST Request Handler
//  Sends to client the available categories
app.post('/categories', (req, res)=> {
 
    const { error } = validateBook(req.body);
    if (error){
        res.status(400).send(error.details[0].message) // bad request
        return;
    }
    res.send(book);   // example
});

// Sends the JSON of locations with alternative_names+description+geonamesid by the radius, categories and target
app.post('/api/location', (req, res)=> {
 
    const { error } = validateBook(req.body);
    if (error){
        res.status(400).send(error.details[0].message) // bad request
        return;
    }
    res.send(book);   // example
});




//  FROM HERE - NOT TO USE
//PUT Request Handler
app.put('/url/:id', (req, res) => {
    const book = books.find(c=> c.id === parseInt(req.params.id)); // example
    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>'); // error 404 not found
 
    const { error } = validateBook(req.body);         //error
    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }
 
    res.send(book); // send example
});
 

//DELETE Request Handler
app.delete('/url/:id', (req, res) => {
 
    const book = books.find( c=> c.id === parseInt(req.params.id)); // example for deleteing specific element
    if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>'); // error not found
    
    res.send(book); // resolve
});
 
 

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
