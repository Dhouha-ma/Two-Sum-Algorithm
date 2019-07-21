/* Two Sum */
/* Return an array filled with every pair of numbers from the array that adds up to the sum */ 

function pairs (arr, sum){
  
  var pairsarr = [];
  var hashtable = [];
  for (var i=0; i< arr.length; i++){
  var currenti = arr[i];
  var additionNum = sum - currenti; 
  
  if(hashtable.indexOf(additionNum)>-1){
    pairsarr.push([currenti,additionNum]);
  }
  hashtable.push(currenti); 
  }
  console.log(pairsarr);
}

pairs ([1,2,4,6,4,7],8);


