// 1. "Quench" is app/site to remind users to drink water
// 2. A description to tell how important water is for health
// 3. Ask user for their name, gender age and sleeping habit
// 4. Ask user for schedule
// 5. Create a nice alert button
// 6. Show a human based on their gender downing a glass of water after they hit "Drank"

const typed = new Typed(".auto-input", {
    strings: ['Glass Of Facts', 'Facts in a Glass', 'gulpgulpgulpgulp'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

const user = {
    names: '',
    gender: '',
    age: ''

}

function gulpOne() {
    names = document.getElementById('name').value;
    gender = document.getElementById('gender').value;
    age = document.getElementById('age').value;
}

console.log('Name:', user.names);
console.log('Gender:', user.age);
console.log('Age:', user.age);




const gulp = document.getElementsByName('gulp');
console.log(gulp);

function submitForm() {
    console.log('Name:', user.names);
    console.log('Gender:', user.age);
    console.log('Age:', user.age);

}


