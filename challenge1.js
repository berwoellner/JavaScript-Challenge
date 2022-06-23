function flatten() {
    const arr1 = [[1,2,3],[4,5,6],[7,8,9]];
    const arr2 = arr1.flat().filter((v) => v < 4);
    console.log(arr2);
}
flatten();