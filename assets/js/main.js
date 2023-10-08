let btnReload = document.getElementById('btn-reload');

btnReload.addEventListener('click',()=>{
    reloadQuote();
    console.log('entrando')
});

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerHTML = '"' + data.content + '"';

            document.getElementById('quote-author').innerHTML = data.author;

            for(i=0;i<Object.keys(data.tags).length;i++){
                document.getElementById('quotes-container').innerHTML += '<h4 class="quote-tag">'+data.tags[i]+'</h4>'
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function reloadQuote(){
    removeTags();
    getQuote();
}

function removeTags(){
    document.getElementById('quotes-container').innerHTML = "";
}
getQuote();