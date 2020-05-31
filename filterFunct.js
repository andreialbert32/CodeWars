Array.prototype.filter = function(fn){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(fn(this[i])){
      result.push(this[i]);
    }
  }
  return result;
}
console.log([1,2,3,4].filter((num)=>{ return num > 3}));
