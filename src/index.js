import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Text from './component/Text.js';
import BasicExample from './component/BasicExample.js';


function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!!!!',
        '5 cubed is equal to '
    ].join('\n\n')+'\n\n';

    return element;
}
function mainEntry() {
    var element = document.createElement('div');
    element.id = 'main';
    return element;
}

if (module.hot){
    module.hot.accept();
}
// 添加的代码
import $ from 'jquery';
$('body').append('<p>Hello vendor</p>');

document.body.appendChild(component());
// document.body.appendChild(mainEntry());
ReactDOM.render(
    <AppContainer>
        <BasicExample/>
    </AppContainer>
    ,document.getElementById('main'));