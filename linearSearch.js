var array = ['a', 'b', 'c'];
const foundIndices =[];

function linearSearch (seekElement) {
  array.forEach((element, index) => {
      if (element === seekElement) {
        foundIndices.push(index);
      }
    });
    return foundIndices;
}

console.log(linearSearch('a'));
