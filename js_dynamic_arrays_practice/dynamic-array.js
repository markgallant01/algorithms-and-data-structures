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
    let newArr = new Array(this.capacity);
    newArr[0] = val;
    this.length += 1; 

    // copy data from old array
    for (let i = 0; i < this.length; i++) {
      newArr[i + 1] = this.data[i];
    }

    this.data = newArr;
  }

}


module.exports = DynamicArray;
