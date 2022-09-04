// =====get all categories======//

const loadNews = async () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.data.news_category;
    } catch (error) {
        console.log(error);
    }

}

const setCategory = async () => {
    const data = await loadNews();

    const allCategory = document.getElementById('menu-bar');

    const uniqueArray = [];

    for (const category of data) {


        if (uniqueArray.indexOf(category.category_name) === -1) {
            uniqueArray.push(category.category_name);


            const li = document.createElement('li');
            li.innerHTML = `
            <a onclick="loadAllNews('${category.category_id}')" class="nav-link btn btn-primary text-white ms-3 mt-2">${category.category_name}</a>
            `;
            allCategory.appendChild(li);
        }
    }

}

setCategory();

// ++++++++Spinner start+++++++++//
const toggleSpinner = isLoading => {
    const spinnerSection = document.getElementById('spinner');
    if (isLoading) {
        spinnerSection.classList.remove('d-none')
    } else {
        spinnerSection.classList.add('d-none')
    }
}

const loadAllNews = async (category_id) => {


    toggleSpinner(true);

    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    const res = await fetch(url);
    const data = await res.json();

    displayNewsItem(data.data);

}





const displayNewsItem = newsAll => {



    newsAll.sort((a, b) => {
        return b.total_view - a.total_view;
    });

    const newsCount = document.getElementById('news-count').innerHTML = `${newsAll.length} items found for category`;


    // =============No News==============//
    const noNews = document.getElementById('no-news-category');
    if (newsAll.length === 0) {
        noNews.classList.remove('d-none');
    }
    else {
        noNews.classList.add('d-none');
    }






}


