const express =  require('express');
const app =  express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.environment?  process.environment.PORT : 3000;

hbs.registerPartials(`${__dirname}/views/partials`);

// Public path
app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        currentDate: new Date()
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(port, () => {
    console.log(`Listening to port ${port}`)
});

