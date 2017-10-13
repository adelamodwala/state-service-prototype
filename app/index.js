import ColorService from './services/colorService';
import ColorStateService from './services/colorStateService';
import ColorBox from './components/colorBox/colorBoxDirective';

console.log('hello');
window.services = {};

// main
function main() {

    // services
    let colorStateService = new ColorStateService();
    let colorService = new ColorService(colorStateService);
    window.services = {
        colorStateService,
        colorService
    };

    let box1 = new ColorBox("color-box1");
    let box2 = new ColorBox("color-box2");
}

main();