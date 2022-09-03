const allNews = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json();
    return data;
}
const setAllMeno = async () => {
    const data = await allNews();
    for (const news_category of data) {
        console.log(news_category)
    }
}
setAllMeno();
// allNews();
