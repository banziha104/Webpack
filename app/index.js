import _ from 'lodash'
function component() {
    let elemenet = document.createElement('div')
    elemenet.innerHTML = _.join('Hello','webpack',' ');
    return elemenet;
}

document.body.appendChild(component());