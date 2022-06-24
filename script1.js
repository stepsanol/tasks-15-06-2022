let obj = {
    'Москва': 'Россия',
    'Киев': 'Украина',
    'Минск': 'Беларусь',
}
const conclusion = document.querySelector('.text');

    for (let key in obj) {
        conclusion.innerHTML += key + ' это ' + obj[key] + '<br>';
    }