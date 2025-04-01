//  # # # #
//  # # # #
//  # # # #
//  # # # #

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        str = str + "# "
    }
    console.log(str);
    
}
console.log('-------------------');

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3 
// 4 4 4 4
 
for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=4;col++){
        str = str + row+" "
    }
    console.log(str);
}

console.log('-------------------');


// 1 2 3 4 
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4


for(row=1;row<=4;row++){
    str = ""
    for(col=1;col<=4;col++){
        str = str + col+" "
    }
    console.log(str);
}
console.log('-------------------');

//*
//* *
//* * *
//* * * *
for(row=1;row<=4;row++){
    str = ""
    
    for(col=1;col<=row;col++){
        str = str +"* "
        
    }
    console.log(str);
}
console.log('-------------------');

// 1
// 2 2
// 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str = ""
    
    for(col=1;col<=row;col++){
        str = str +row + " "
        
    }
    console.log(str);
}
console.log('-------------------');

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(row=1;row<=4;row++){
    str = ""
    
    for(col=1;col<=row;col++){
        str = str +col + " "
        
    }
    console.log(str);
}
console.log('-------------------');

// * * * *
// * * *
// * * 
// *
for(row=4;row>=1;row--){
    str = ""
    
    for(col=1;col<=row;col++){
        str = str +"* "
        
    }
    console.log(str);
}
console.log('------------------');


//    *
//   * *
//  * * *
// * * * *

for(row=1;row<=4;row++){
    str = ""
    for(space=3;space>=row;space--){
        str= str+"  "
    }
    for (col=1; col<=row; col++){
        str = str + "*  "
    }   
    console.log(str);
}
console.log('-------------------');


//HW
//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * *
//* * 
//*

for(row=1;row<=5;row++){
    str = ""
    
    for(col=1;col<=row;col++){
        str = str +"*  "
        
    }
    console.log(str);
}
for(row=4;row>=1;row--){
    str = ""
    
    for(col=1;col<=row;col++){
        str = str +"*  "
        
    }
    console.log(str);
}

console.log('---------in single loop----------');

for(row=1;row<=9;row++){//1<=9 //2<=9
    if(row<=5){  //1<=5 //2<=5........//6<=5
        str = ""  
        for(col=1;col<=row;col++){ //1<=1 //2<=1//2<=2
            str = str +"*  "    //* *
            
        }
        console.log(str);
    }
    else{
        str = ""
        for(col=1;col<=10-row;col++){ //1<=10-6
            str = str +"*  " //*
            
        }
        console.log(str);
    }
}

console.log('-------------------');



//--------HW----------


//     *
//    * *
//   * * *  
//  * * * *
// * * * * *
//  * * * *
//   * * *  
//    * *
//     *

//--------------------

// 1
// 0 1
// 1 0 1
// 0 1 0 1

//--------------------

//             11
//          12 13 14
//       15 16 17 18 19 
//    20 21 22 23 24 25 26
// 27 28 29 30 31 32 33 34 35

//-> row =5 , col= 9,  from 11 to 35, pyramid structure