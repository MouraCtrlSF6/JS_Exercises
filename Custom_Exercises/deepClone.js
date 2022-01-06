function cloneArray(myArray) {
  const newArray = []
  myArray.forEach(item => {
    if(Array.isArray(item)) {
      newArray.push(cloneArray(item))
    } 
    else if(typeof item === 'object') {
      newArray.push(cloneObj(item))
    }
    else newArray.push(item)
  })

  return newArray
}

function cloneObj(myObj) {
  const newObj = {}
  Object.keys(myObj).forEach(item => {
    if(Array.isArray(myObj[item])) {
      newObj[item] = cloneArray(myObj[item])
    }
    else if(typeof myObj[item] === 'object') {
      newObj[item] = cloneObj(myObj[item])
    }
    else newObj[item] = myObj[item]
  })

  return newObj
}

function deepClone(original) {
  if(Array.isArray(original)) {
    return cloneArray(original)
  }
  if(typeof original === 'object') {
    return cloneObj(original)
  }
  return original;
}

module.exports = deepClone
