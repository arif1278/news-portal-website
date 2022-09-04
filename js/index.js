const allNews = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await response.json();
    // return data;
    displayCategories(data.data.news_category);
}

const displayCategories = (category) => {
    const categoriesContainer = document.getElementById('categori');
    category.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('menu', 'menu-horizontal', 'bg-base-100', 'mt-7')
        li.innerHTML = `
        <li><a onclick="loadCatDetails(${item.category_id})" class="text-2xl"${item.category_name}</a></li>
        `;
        categoriesContainer.appendChild(li);
    });
}

allNews();
