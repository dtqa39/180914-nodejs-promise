var p1 = Promise.resolve(1);
var p2 = Promise.resolve(2);
var p3 = Promise.resolve(3);
 
Promise.all([p1, p2, p3]).then(function (values){ 
  console.log(values);
  var p5 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, [5]);
  });
  p5.then(function(e){
      console.log(e);
  })
});