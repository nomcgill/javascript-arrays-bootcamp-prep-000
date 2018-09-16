<<<<<<< HEAD
var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");


function addElementToBeginningOfArray(chocolateBars){
return ['foo',...chocolateBars];
}

function addElementToEndOfArray(chocolateBars){
return [...chocolateBars, 'foo'];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars){
chocolateBars.unshift('foo');
return chocolateBars
}

function destructivelyAddElementToEndOfArray(chocolateBars){
chocolateBars.push('foo');
return chocolateBars
}


function accessElementInArray(chocolateBars){
  return chocolateBars[2]
}


const array = ['item1','item2','item3']

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)

}
=======
var chocolateBars = new Array("snickers", "hundred grand", "kitkat", "skittles");
>>>>>>> f8877dd6255119428e7a39c1f78d9b82b214a86c
