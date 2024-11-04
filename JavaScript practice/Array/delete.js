let array  = [30,20,10,43,45,67,98];
// let position = 3;

// for(let i = position; i < array.length-1; i++){
//     array[i]=array[i+1]
// }
// array.length = array.length-1
// console.log(array)

const deleteElement = (arr, index)=>{

    for(let i = index; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1;
    console.log(arr)

}

// console.log(array.splice(2,1))
deleteElement(array, 1)