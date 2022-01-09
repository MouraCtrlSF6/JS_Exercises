class ObjectUses {
  // Switch the values between two object atributes
  // or array indexes
  static switchContent(obj, propOne, propTwo) {
    [obj[propOne], obj[propTwo]] = [obj[propTwo], obj[propOne]]
  }

  static cloneArray(myArray) {
    return myArray.map(item => {
      if(Array.isArray(item)) {
        return ObjectUses.cloneArray(item)
      } 
      if(typeof item === 'object') {
        return ObjectUses.cloneObj(item)
      }
      return item
    })
  }
  
  static cloneObj(myObj) {
    const newObj = {}
    Object.keys(myObj).forEach(item => {
      if(Array.isArray(myObj[item])) {
        newObj[item] = ObjectUses.cloneArray(myObj[item])
      }
      else if(typeof myObj[item] === 'object') {
        newObj[item] = ObjectUses.cloneObj(myObj[item])
      }
      else newObj[item] = myObj[item]
    })
  
    return newObj
  }
  
  // Return a copy of an object, with the same content, 
  // but independent of the original
  static deepClone(original) {
    if(Array.isArray(original)) {
      return ObjectUses.cloneArray(original)
    }
    if(typeof original === 'object') {
      return ObjectUses.cloneObj(original)
    }
    return original;
  }
  
  // Some as Array.map(), but functional for all types of
  // objects.
  static mapper(obj, callback) {
    const newObj = new Object()

    for(let [value, key] of Object.entries(obj).map(item => item.reverse())) {
      newObj[key] = callback(value, key, obj)
    }
    return newObj
  } 
}

module.exports = ObjectUses
