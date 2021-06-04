/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
const quotes = [{
        quote: 'Whoever is happy will make others happy too.',
        source: 'Anne Frank',
        citation: 'Twitter',
        year: '2017'
    },
    {
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
        source: 'Benjamin Franklin',
        citation: 'Facebook',
        year: '2015'
    },

    {
        quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
        source: 'Franklin D. Roosevelt',
        citation: 'Twitter',
        year: '2014'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        source: 'Margaret Mead',
        citation: 'Twitter',
        year: '2012'
    },
    {
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail. ',
        source: 'Ralph Waldo Emerson',
        citation: 'Twitter',
        year: '2015'
    },
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams.',
        source: 'Eleanor Roosevelt',
        citation: 'Twitter',
        year: '2016'
    },
    {
        quote: 'Donot judge each day by the harvest you reap but by the seeds that you plant.',
        source: 'Robert Louis Stevenson',
        citation: 'Twitter',
        year: '2012'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        source: 'Margaret Mead',
        citation: 'Facebook',
        year: '2015'
    },
    {
        quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
        source: 'Franklin D. Roosevelt',
        citation: 'Facebook',
        year: '2011'
    },
    {
        quote: 'The future belongs to those who believe in the beauty of their dreams. ',
        source: 'Eleanor Roosevelt',
        citation: 'Facebook',
        year: '2012'
    },
    {
        quote: 'Donot judge each day by the harvest you reap but by the seeds that you plant.',
        source: 'Robert Louis Stevenson',
        citation: 'Facebook',
        year: '2015'
    },
];

const quoteBtn = document.querySelector('#load-quote');
const quoteBox = document.querySelector('#quote-box');

/**** `getRandomQuote` function
 ***/
function getRandomQuote() {

    let randoms = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randoms);
    let newQuote = '';

    newQuote += `
    <i class="fas fa-quote-left"></i>
        <p class="quote">${randoms.quote}
        </p>
        <hr>
        <p class="source">${randoms.source}
            <span class="citation">${randoms.citation}</span>
            <span class="year">${randoms.year}</span>
        </p>

        `
    quoteBox.innerHTML = newQuote;
}



/***
 * `printQuote` function
 ***/
function printQuote() {
    return getRandomQuote();
}
/*** Get Random   Color**/
const colors = ['#66b2b2', '#008080', '#4a8560', '#4eba72', '#69D2E7', '#50667d', '#16a085', '#4f6566', '#71c7ec', '#2c3e50'];

function getRandomColors() {
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColors);
    document.body.style.backgroundColor = randomColors;
    document.querySelector('.quote').style.color = randomColors;


}
/***
 * click event listener for the print quote button
 ***/

quoteBtn.addEventListener('click', printQuote);
quoteBtn.addEventListener('click', getRandomColors);