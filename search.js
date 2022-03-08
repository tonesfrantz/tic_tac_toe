function createSearchBar1() {
    let searchBar1 = document.querySelector('.search1');
    let form = document.createElement('p');
    form.innerHTML = `
    <form id= "searchForm1">
      <label for="searchGiphy1">Player 1 Giphy Search:</label><br>
      <input type="text" id="searchGiphy1" name="searchGiphy1"><br>
      <button type="submit">Search</button>
    </form>
    `;
    searchBar1.appendChild(form);
}

function search1() {
    let form = document.getElementById('searchForm1');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let searchInput1 = document.getElementById('searchGiphy1').value;
        let display1 = document.querySelector('.display1');
        console.log(searchInput1);
        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?api_key=tLDNKUKU5FzMzBc6wOme9nAiLLE2CAdg&q=+${searchInput1}&limit=15&offset=0&rating=g&lang=en`
            )
            .then((response) => {
                let giphyObject1 = response.data['data'];
                let giphyImage1 = giphyObject1[0].images.fixed_height.url;
                console.log(giphyObject1);
                console.log(giphyImage1);
                let id = 0;
                giphyObject1.forEach((element) => {
                    const img = document.createElement('img');
                    img.id = id;
                    img.src = element.images.fixed_height.url;
                    // let onClickCommand = 'add_player1()';
                    img.onclick = function add_player1() {};
                    console.log(img);
                    display1.appendChild(img);
                    id++;
                });
            });
    });
}

function createSearchBar2() {
    let searchBar2 = document.querySelector('.search2');
    let form = document.createElement('p');
    form.innerHTML = `
    <form id= "searchForm2">
      <label for="searchGiphy2">Player 2 Giphy Search:</label><br>
      <input type="text" id="searchGiphy2" name="searchGiphy2"><br>
      <button type="submit">Search</button>
    </form>
    `;
    searchBar2.appendChild(form);
}

function search2() {
    let form = document.getElementById('searchForm2');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let searchInput2 = document.getElementById('searchGiphy2').value;
        let display2 = document.querySelector('.display2');
        console.log(searchInput2);
        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?api_key=tLDNKUKU5FzMzBc6wOme9nAiLLE2CAdg&q=+${searchInput2}&limit=15&offset=0&rating=g&lang=en`
            )
            .then((response) => {
                let giphyObject2 = response.data['data'];
                let giphyImage2 = giphyObject2[0].images.fixed_height.url;
                console.log(giphyObject2);
                console.log(giphyImage2);
                let id = 0;
                giphyObject2.forEach((element) => {
                    const img = document.createElement('img');
                    img.id = id;
                    img.src = element.images.fixed_height.url;
                    img.innerHTML = 'onClick = add_player2()';
                    console.log(img);
                    display2.appendChild(img);
                    id++;
                });
            });
    });
}
