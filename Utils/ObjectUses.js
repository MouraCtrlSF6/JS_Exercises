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
    return ObjectUses.mapper(myObj, (value) => {
      if(Array.isArray(value)) {
        return ObjectUses.cloneArray(value)
      }
      if(typeof value === 'object') {
        return ObjectUses.cloneObj(value)
      }
      return value
    })
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
