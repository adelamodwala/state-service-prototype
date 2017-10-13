import $ from 'jquery';
import ColorBoxController from './colorBoxController';

const buttonTemplate = ({id, text}) => `<button id="${id}-button">${text}</button>`;
const viewTemplate = ({color, title}) => `
        <div style="background-color: ${color}">
            <div>${title}</div>
        </div>
    `;

const button = ({id, text, onClick}) => {
    let elem = $(buttonTemplate({id, text}))[0];
    elem.addEventListener('click', onClick);
    return elem;
};

const view = ({id, title, color, onClick}) => {
    let btn = button({id, text: "Color", onClick});
    let elem = $(viewTemplate({color, title}));
    elem.append(btn);
    return elem;
};

export default class ControllerBox {

    constructor(id) {
        this.elem = $(`#${id}[data-component='ColorBox']`);
        this.id = id;
        this.title = this.elem.attr('data-title');
        this.color = this.elem.attr('data-color');
        this.controller = new ColorBoxController(id, this.title, this.color);
        console.log("generating ControllerBox");
        this.render();
    }

    render() {
        this.elem.html(view({
            id: this.id,
            title: this.title,
            color: this.color,
            onClick: this.controller.changeColor
        }));
    }
}