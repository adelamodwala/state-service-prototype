import handlebars from 'handlebars';
import $ from 'jquery';

let source = $("#template1").html();
let template = handlebars.compile(source);
let data = {
    title: "Hello World!",
    message: "How ya doin'?"
};

$("#template1-view").html(template(data));