import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', myName('Sean')], ' ');

    return element;
}

document.body.appendChild(component());