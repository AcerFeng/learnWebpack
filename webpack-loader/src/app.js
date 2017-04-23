import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
    const NUM = 12;
    alert(NUM);
    console.log(layer);

    const app = document.getElementById('app');
    const layer = new Layer();
    app.innerHTML = layer.tpl({
        name: 'haha',
        arr: ['nihao', 'apple', 'oppo']
    });
}

new App();