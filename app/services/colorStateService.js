
class ColorStateService {

    constructor() {
        this.state = {
            color: "blue"
        };
        console.log("starting ColorStateService");
    }

    updateColor(color) {
        console.log(`Old Color: ${this.state.color}`);
        this.state.color = color;
        console.log(`New Color: ${this.state.color}`);
    }
}

export default ColorStateService;