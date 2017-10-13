
class ColorService {

    constructor(colorStateService) {
        this.colorStateService = colorStateService;
        console.log("starting ColorService");
    }

    generateColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    changeColor() {
        this.colorStateService.updateColor(this.generateColor());
    }
}

export default ColorService;