class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = [];
      for (let i = 0; i < rows; i++) {
        this.data.push(new Array(cols).fill(0));
      }
    }
  
    setData(data) {
      this.data = data;
    }
  
    get(row, col) {
      return this.data[row][col];
    }
  
    set(row, col, value) {
      this.data[row][col] = value;
    }
  
    transpose() {
      const transposed = new Matrix(this.cols, this.rows);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          transposed.set(j, i, this.get(i, j));
        }
      }
      return transposed;
    }
    swapRows(row1, row2) {
      const temp = this.data[row1];
      this.data[row1] = this.data[row2];
      this.data[row2] = temp;
    }
  
    inverse() {
   if (this.rows !== this.cols) {
        throw new Error('Matrix must be squared');
      }
  
      const n = this.rows;
      const augmented = new Matrix(n, 2 * n);
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          augmented.set(i, j, this.get(i, j));
          augmented.set(i, j + n, i === j ? 1 : 0); 
        }
      }
  
      for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
          if (Math.abs(augmented.get(k, i)) > Math.abs(augmented.get(maxRow, i))) {
            maxRow = k;
          }
        }
  
        augmented.swapRows(i, maxRow);
  
        const pivot = augmented.get(i, i);
        for (let j = i; j < 2 * n; j++) {
          augmented.set(i, j, augmented.get(i, j) / pivot);
        }
  
        for (let k = 0; k < n; k++) {
          if (k !== i) {
            const factor = augmented.get(k, i);
            for (let j = i; j < 2 * n; j++) {
              augmented.set(k, j, augmented.get(k, j) - factor * augmented.get(i, j));
            }
          }
        }
      }
  
      const inverse = new Matrix(n, n);
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          inverse.set(i, j, augmented.get(i, j + n));
        }
      }
  
      return inverse;
    } 
  
  }
  
  const matrix = new Matrix(3, 3);
  matrix.setData([[1, 2, 3], [0, 1, 4], [5, 6, 0]]);
  
  const inverseMatrix = matrix.inverse();
  console.log(inverseMatrix.data);