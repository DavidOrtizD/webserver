const hbs = require('hbs');

// HBS helpers
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('capitalize', (text) => {
    let paragraph = text.split(' ');
    paragraph.forEach((word, index) => { 
        paragraph[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return paragraph.join(' ');
});