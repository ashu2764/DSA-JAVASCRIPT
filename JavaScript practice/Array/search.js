let array = [10,20,45,3,2,90,11];

// let target = 45;

// for (let i = 0; i<array.length; i++){
//    if(target == array[i]){
//    console.log(i)
//    }
// }


const seachElement =(arr, target)=>{

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === target){
            return i;
       
        
        } 
    }
 

}

// console.log(array.indexOf(20))


console.log(seachElement(array, 11))