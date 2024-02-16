

document.querySelector('nav').addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        const page = event.target.getAttribute('href');
        fetch(page)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const title = doc.querySelector('title').textContent;
                const content = doc.querySelector('main').innerHTML;
                createPage(title, content);
            })
            .catch(error => console.error(error));
    }
});

fetch('index.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const title = doc.querySelector('title').textContent;
        const content = doc.querySelector('main').innerHTML;
        createPage(title, content);
    })
    .catch(error => console.error(error));
