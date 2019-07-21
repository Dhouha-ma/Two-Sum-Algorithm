function twosum (arr, sum){
  
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

twosum ([1,2,4,6,4,7],8);


