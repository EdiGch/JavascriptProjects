var titles = document.getElementsByClassName('title');

console.log( titles[0] );
console.log( titles[1] );


console.log(titles[0].textContent);
console.log(titles[1].textContent);

console.log('===================== From Loop ====================');
var loopTiteles = function(){
    for(var i = 0; i < titles.length; i++){
        console.log(titles[i].textContent);
    }
};

loopTiteles();


var lis = document.getElementsByTagName('li');
var deleteElement = lis[0].children[1].textContent;
console.log(deleteElement);


console.log('===================== From Array ====================');
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(title){
    console.log(title);
});
