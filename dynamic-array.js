class DynamicArray {

  constructor(defaultSize=4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {

  }

}


module.exports = DynamicArray;
