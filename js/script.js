// step-1 : Load data, fetch and display data

const loadCategories = async() => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
        const data = await res.json();
        displayCategories(data.categories);
        
    } catch (error) {
        console.log(`ERROR : ${error}`);
    }
}

// display data
const displayCategories = (data) => {
    data.map((categoryList) => {
        const category = categoryList.category;
        console.log(category)
    })
}

loadCategories()