(function() {
let currentScript = (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
})();
let table = currentScript.getAttribute('onTable');
let page = currentScript.getAttribute('page');
console.log('table', table);
console.log('page', page);
})();
