document.addEventListener("DOMContentLoaded",function () {
    
    let quotes =[
        {
            text:"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle." ,
            auther:"Steve Jobs"
        },
        {
            text:"The two most important days in your life are the day you are born and the day you find out why.",
            auther:"Mark Twain"
        },
        {
            text:"Life is like riding a bicycle. To keep your balance you must keep moving.",
            auther:"Albert Einstein"
        },
        {
            text:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
            auther:"Winston Churchill"
        },
        {
            text:"It is our choices that show what we truly are, far more than our abilities.",
            auther:"J.K. Rowling "
        },
        {
            text:"",
            auther:""
        },
        {
            text:"Life’s only nod to fairness was the blindness with which it dealt unfair blows.",
            auther:"Kate Morton"
        },
        {
            text:"We are what we pretend to be, so we must be careful about what we pretend to be.",
            auther:"Kurt Vonnegut"
        }
    ];
    let quotetext = document.getElementById("quote")
    let Authertext = document.getElementById("author")
    let button = document.getElementById("genrate-btn")

    if (button === null ||Authertext === null || quotetext === null) {
        return;
    }

    button.onclick = genrateQuote;

    function genrateQuote() {
        let randomquote = Math.floor(Math.random()*quotes.length);
        quotetext.textContent = '"' + quotes[randomquote].text + '"';
        Authertext.textContent = '- ' + quotes[randomquote].auther;
    }
})