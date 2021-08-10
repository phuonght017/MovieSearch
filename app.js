const form = document.querySelector('#searchForm');
const secImg = document.querySelector('#imgs');
form.addEventListener('submit', async function (e) {
    reset();
    e.preventDefault();
    const searchTerm = form.elements.input.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    showImg(res.data);    
})

const showImg = function(shows) {
    for (let title of shows) {
        if (title.show.image) {
            const img = document.createElement('img');
            img.src = title.show.image.medium;
            secImg.appendChild(img);
        }
    }
}

const reset = function() {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) img.remove();
}