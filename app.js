const userData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
}

// userData();

const displayUser = user => {
    console.log(user);
    console.log('email:', user.email);
}


const mealSearch = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

// mealSearch('fish');

const searchMeal = () => {
    const inputText = document.getElementById('search-meal').value;
    toggleSpinner('block');
    toggleResult('none')
    mealSearch(inputText);
    document.getElementById('search-meal').value = '';
}

const displayMeal = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    for (const meal of meals) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <h3>${meal.strCategory}</h3>
        <br>
        `;
        container.appendChild(div);
    }
    toggleSpinner('none');
    toggleResult('block');
}

const toggleSpinner = spinnerStyle => {
    document.getElementById('spiner').style.display = spinnerStyle;
}
const toggleResult = resultStyle => {
    document.getElementById('meals').style.display = resultStyle;
}