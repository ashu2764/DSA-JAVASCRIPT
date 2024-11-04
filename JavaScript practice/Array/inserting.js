// let array = [2,4,5,3,6,4,3];

// //INSERTING AN ELEMENT IN ARRAY
// // FOR EG ARR[2]=3, ==> [2,4,3,5,3,6,4,3]=> LENGTH + 1; 

// function insertElement (arr, element, index){
//     // let element = 3;
//     // let index = 2;


//     for(let i = arr.length-1; i >=0 ; i--){
//         if (i >= index){
//             arr[i+1] = arr[i]
//             if(i===index){
//                 arr[i]= element;

//             }
//         }
//     }
// console.log(arr)


// }

// insertElement(array, 5,1)


let insertElement =(arr, element, index)=>{

    for(let i = arr.length-1; i >= 0; i--){

        if(i >= index){
            arr[i+1]=arr[i]
            if(i===index){
                arr[i]=element;
            }
        }

    }
    return arr



}

let array = [8,3,5,8,92,90]

console.log( insertElement(array, 400, 0))