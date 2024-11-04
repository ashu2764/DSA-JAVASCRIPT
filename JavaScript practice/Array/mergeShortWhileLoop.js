let data1 = [3,6,7,8,9,10,34,90];
let data2 = [4,5,11,31,32] ;
let data = [];

let d1=0;
let d2=0;
let d3=0;

while(d1 < data1.length && d2<data2.length){
    if(data1[d1] < data2[d2])
        {
        data[d3] = data1[d1]
        d1++;

    }else{
        data[d3] = data2[d2]
        d2++;
    }
    d3++;
}
while(d1<data1.length){
    data[d3] = data1[d1]
    d1++;
    d3++;
}


console.log(data)