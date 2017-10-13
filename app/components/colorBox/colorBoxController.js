
export default class ColorBoxController {

    constructor(id, title, color) {
        this.id = id;
        this.title = title;
        this.color = color;
    }

    changeColor() {
        console.log(`ConrollerBox ${this.id} changing`);
        services.colorService.changeColor();
    }
}