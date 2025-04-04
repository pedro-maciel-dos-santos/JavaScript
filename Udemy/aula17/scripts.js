//callback

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function a1(callback){
    setTimeout(function(){
        console.log('a1');
        if(callback) callback();
    }, rand());
}
function a2(callback){
    setTimeout(function(){
        console.log('a2');
        if(callback) callback();
    }, rand());
}
function a3(callback){
    setTimeout(function(){
        console.log('a3');
        if(callback) callback();
    }, rand());
}

/*
a1(function(){
    a2(function(){
        a3(function(){
            console.log('Olá mundo!');
        });
    });
});
*/

a1(a1Callback);

function a1Callback(){
    a2(a2Callback);
}

function a2Callback(){
    a3(a3Callback);
}

function a3Callback(){
    console.log('Olá mundo!');
}
