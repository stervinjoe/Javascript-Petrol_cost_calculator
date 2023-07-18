

function removeNegative(x){

    while (x.length && x[x.length - 1] < 0) {
     x.pop();
   }
   for (let i = x.length - 1; i >= 0; i--) {
     if (x[i] < 0) {

      x[i] = x[x.length - 1];
      x.pop();
    }
  }
  return x;
}

  var x = [7, -2, 3, 4, 5, -1, 6];
  console.log(removeNegative(x));