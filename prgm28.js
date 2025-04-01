

//(row,col)  
// (1,4)=add->5       (1,4)=sub->3
// (2,3)=add->5       (2,5)=sub->3
// (3,2)=add->5       (3,6)=sub->3
// (4,1)=add->5       (4,7)=sub->3


//         *
//      *     *
//    *           *
// *  *  *  *  *  *  *

for(row=1;row<=4;row++){
    str = ""
    for (col=1; col<=7; col++){
        if(row+col==5 || col-row==3 || row==4){
            str = str + "* "
        }
        else{
            str= str+"  "
        }
    }   
    console.log(str);
}
console.log('-------------------');



// * * * * *
// *       *
// *       *
// *       *
// * * * * *



// (2,1) (3,1) (4,1) ---   (2,5) (3,5) (4,5)

for(row=1;row<=5;row++){
    str = ""
    for(col=1;col<=5;col++){
        if(col==5 || col==1 || row==5|| row==1 ){
            str = str + "* "
        }
        else{
            str= str+"  "
        }
    }
    console.log(str);
}
console.log('-------------------');

// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

//(2,4)  (4,2) -> add ->6
// (row==col)
for(row=1;row<=5;row++){
    str = ""
    for(col=1;col<=5;col++){
        if(row==col || row==1 || row==5 || row+col==6 ){
            str = str + "* "
        }
        else{
            str= str+"  "
        }
    }
    console.log(str);
}
console.log('-------------------');


//     *
//    * *
//   * * *  
//  * * * *
// * * * * *
//  * * * *
//   * * *  
//    * *
//     *

for(row=1;row<=9;row++){
    
    if(row<=5){  
        str = ""
        for(space=4;space>=row;space--){
            str= str+"  "
        }
        for(col=1;col<=row;col++){ 
            str = str +"*  "    
            
        }
        console.log(str);
    }
    else{
        str = ""
        for(space=4;space>=10-row;space--){
            str= str+"  "
        }
        for(col=1;col<=10-row;col++){ 
            str = str +"*  "
            
        }
        console.log(str);
    }
}

console.log('-------------------');


// 1
// 0 1
// 1 0 1
// 0 1 0 1

for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=row;col++){
        if((row+col)%2 ==0){
            str += "1 ";
        }
        else {
            str += "0 ";
        }
    }
    console.log(str);
}
console.log('-------------------');


//             11
//          12 13 14
//       15 16 17 18 19 
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

let num=11
for(row=1;row<=5;row++){
    str = ""
    for(space=4;space>=row;space--){
        str= str + "   "
    }
    for (col=1; col<=2*row-1; col++){
        str = str + num + " "
        num++
    }   
    
    console.log(str);
}
console.log('-------------------');