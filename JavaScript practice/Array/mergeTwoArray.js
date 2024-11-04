let arr1 = [1,2,3,4,5]

let arr2= [4,6,7,9,0]

let arr3 = [];

for(let i =0; i < arr1.length; i++){
    arr3[i] = arr1[i]
}
for(let i = 0; i < arr2.length; i++){
    arr3[arr1.length+i]=arr2[i]
}

arr3 = [...arr1, ...arr2]  //mergring two array shortcut
console.log(arr3)

// let rev = arr1.reverse() // to reverse a element 
// console.log(rev)

// console.log(arr3)