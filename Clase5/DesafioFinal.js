var moment = require('moment');
let hoy = moment();
console.log('Hoy es '+hoy.format('DD/MM/YYYY'));
let naci = moment("2005-06-30");
console.log('naci '+naci.format('DD/MM/YYYY'));
let diffAnios = hoy.diff(naci,'years');
let diffDias = hoy.diff(naci,'days');
console.log('Desde mi nacimiento han pasado '+ diffAnios+' anios');
console.log('Desde mi nacimiento han pasado '+ diffDias+' dias');