let quotesContainer = document.getElementById('quotes-container');

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {

            document.getElementById('quote').innerHTML = '"' + data.content + '"';

            document.getElementById('quote-author').innerHTML = data.author;

            for(i=0;i<Object.keys(data.tags).length;i++){
                document.getElementById('quotes-container').innerHTML += '<h4 class="quote-tag">'+data.tags[i]+'</h4>'
            }

            console.log(Object.keys(data.tags).length)
        })
        .catch(error => {
            console.log(error)
        })
}

getQuote();