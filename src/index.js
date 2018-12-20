const $ = require('jquery');
const hello = require('./say-hello.js')
const sayHello = name => console.log('Hello!');

sayHello();

// alert('hey')

$('#npmHead').click(e => alert('clicked!'))


$('#npmHead').html('<h1><em>Fingers Crossed!</em></h1>');

$('#npmLorem').html(hello)


// console.log(helloMessage())
// alert('end of script');