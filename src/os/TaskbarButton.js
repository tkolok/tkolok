import {NAME_CHANGE} from './Window.js';

const taskbarButtons = document.body.querySelector('#taskbarButtons');

export default class TaskbarButton extends HTMLButtonElement {
    #window;

    constructor(window) {
        super();

        this.#window = window;
        this.addEventListener('click', () => window.show());
        this.innerHTML = `
            <span class="icon small ${window.icon}"></span>
            <span class="name"></span>`;
        window.addEventListener(NAME_CHANGE, this.#updateName.bind(this));
        this.#updateName();

        taskbarButtons.append(this);
    }

    #updateName() {
        this.querySelector('.name').innerHTML = this.#window.name;
    }
}

customElements.define('w-taskbar-button', TaskbarButton, {extends: 'button'});
