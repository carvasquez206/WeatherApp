var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=78b4d98931a5629b9470317fc4512592')
    .then(response => Response.json())
    .then(data => {

        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        name.innerHTML =nonmreValue
        temp.innerHTML =tempValue
        desc.innerHTML =descValue

    })

    .catch(err => alert("Wrong city name!"))
})