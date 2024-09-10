/* script for search button */
document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchInput').value;
    if(query) {
        search(query);
    } else {
       reload;
    }
});

function search(query) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<div class="ps-3" style="background-color:lightgrey">Search results for: "${query}"</div>`
     
}