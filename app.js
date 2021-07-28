// CommonJS syntax to bring login js file into app file. 
// So login file execute first because it is at top then app.js console log execute after that
require('./login'); 

document.write("Welcome to Big Hair Concerts!!");

console.log('App loaded');
