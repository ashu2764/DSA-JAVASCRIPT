let arr = [40,20,34,30,11,10];

for(let i=0; i<arr.length;i++){
    for(j=0; j<arr.length; j++){
        console.log(arr)
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr)