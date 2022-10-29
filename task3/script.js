const lights = document.querySelector('#lights');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
 
    lights.addEventListener('click', (event) => {
    if (trafficLightEl3.style.background === 'red' ||
    trafficLightEl3.style.background === ''&& 
    trafficLightEl2.style.background === ''&& 
    trafficLightEl1.style.background === '') {
        makeBlackAll();
        makeGreen();
    }
     else if (trafficLightEl2.style.background === 'yellow' &&
    trafficLightEl1.style.background === ''&&
    trafficLightEl3.style.background === '') {
        makeBlackAll();
        makeRed();
        }
        else if (trafficLightEl1.style.background === 'green' && 
    trafficLightEl2.style.background === '' &&
    trafficLightEl3.style.background === '') {
        makeBlackAll();
        makeYellow();
    };
});
 
function makeBlackAll () {
    trafficLightEl1.style.background = '';
    trafficLightEl2.style.background = '';
    trafficLightEl3.style.background = '';
    
};
function makeGreen() {
    trafficLightEl1.style.background = 'green';
};
function makeYellow() {
    trafficLightEl2.style.background = 'yellow';
};
function makeRed() {
    trafficLightEl3.style.background = 'red';
};
