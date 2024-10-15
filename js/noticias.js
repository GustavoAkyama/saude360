const apiKey = process.env.API_KEY;
const url = `https://gnews.io/api/v4/search?apikey=${apiKey}&in=title&q="saúde"&country=br`;

function renderNews(articles) {
    const news_container = document.getElementById('news-container');
    news_container.innerHTML = '';

    if (articles.length === 0) {
        const news = document.createElement('div');
        news.classList.add('card');
        news.innerHTML =
            `<div class="error-image">
                <img src="../img/error.png" style="max-width: 360px; margin-bottom: 32px;"></img>
                <span class="news-title">Infelizmente, não conseguimos encontrar notícias no momento...</a>
            </div>`;
        news_container.appendChild(news);
        return;
    }

    articles.forEach(article => {
        if (article.title !== '[Removed]') {
            const news = document.createElement('div');
            news.classList.add('news', 'card');
            news.innerHTML =
                `<div class="news-card">
                    <img src="${article.image}" class="news-image"></img>
                    <div class="news-content">
                        <span class="news-author">Créditos - ${article.source.name}</span>
                        <a href="${article.url}" target="_blank" class="news-title">${article.title}</a>
                        <span class="news-description">${article.description}</span>
                        <a href="${article.source.url}" target="_blank" style="text-transform: lowercase;" class="link">${article.source.url}</a>
                    </div>
                </div>`;
            news_container.appendChild(news);
        }
    });
}

function loadNewsFromLocalStorage() {
    const newsData = localStorage.getItem('newsData');
    const newsTimestamp = localStorage.getItem('newsTimestamp');
    const now = new Date().getTime();

    if (newsData && newsTimestamp && (now - newsTimestamp < 24 * 60 * 60 * 1000)) {
        return JSON.parse(newsData);
    }

    return null;
}

function saveNewsToLocalStorage(articles) {
    const now = new Date().getTime();
    localStorage.setItem('newsData', JSON.stringify(articles));
    localStorage.setItem('newsTimestamp', now);
}

const storedNews = loadNewsFromLocalStorage();

if (storedNews) {
    renderNews(storedNews);
} else {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            renderNews(data.articles);
            saveNewsToLocalStorage(data.articles);
        })
        .catch(error => {
            const news_container = document.getElementById('news-container');
            const news = document.createElement('div');
            news.classList.add('card');
            news.innerHTML =
                `<div class="error-image">
                    <img src="../img/error.png" style="max-width: 360px; margin-bottom: 32px;"></img>
                    <span class="news-title">Infelizmente, não conseguimos encontrar notícias no momento...</a>
                </div>`;
            news_container.appendChild(news);
        });
}
