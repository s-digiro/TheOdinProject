import _ from 'lodash';
import myName from './myName';
import printMe from './print.js';
import './style.css';
import Cat from './cat.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', myName('Sean')], ' ');
    element.classList.add('hello');

    const cat = new Image();
    cat.src = Cat;

    element.appendChild(cat);

    console.log(Data);
    console.log(Notes);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());