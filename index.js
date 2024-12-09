// console.log("--------- Welcome in JS ----------");

// var arr = [5,6,2,7,8,1,3,4,6,];

// //select element:

// const n4 = arr[3]; //7
// console.log("4th value :",n4);

// // update element : at 7th position
// arr.splice(7,1,999);

// console.log("---Upadated Array---:",arr);

// //Delete element : at 5th position:
// arr.splice( 5,1);

// console.log("----- array after deleted-----:",arr);


// var xyz = [ 1,4,5,6,73,2,4];

// // delete element : at 2nd position:
// xyz.splice(2,1);

// console.log("----array after deleted----",xyz);

// var abc = [ 1,3,45,6,2,2];

// // add one in: in each elements:
// var UpadatedArray = abc.map(element => element+1);
// console.log(UpadatedArray);



// const arr =[ 1,4,5,6,73,2,4];

// for( let i = 0;i<arr.length; i++){
//     let arr_i = arr[i];
//     console.log("my array value:",arr_i);
// }

//Traversal:

// const arr =[ 1,4,5,6,73,2,4];

// for( let i = 0;i<arr.length; i++){
//     let arr_i = arr[i]; //index-i-:0,1,2,3,4,5,6
//     console.log("my array value:",arr_i);
//     // if condition 
//     if (arr_i ===5){
//         console.log(arr_i);
//     }
// }



// Type of Data:

// number = 5,5.33
//string = "hello"
// char c ='t'
//boolean b = true,false
//array arr = [2,3,4];
// Object ob ={}

// let,var,const

//object : key valuepair;

let student_id_card = {
    //key : value,
    name:" rohan",
    rollnumber: 13542,
    Address:"xyz____abc",
    branch:"c",
    dob:"18-10-2006"

};
//select: two Method :  dot and square bracket

 const myAddress = student_id_card.Address;
 const myBranch = student_id_card.branch;
 const myname =  student_id_card.name;
 const myrollnumber = student_id_card.rollnumber;
 const mydob = student_id_card.dob;


 console.log(myAddress);
 console.log(myBranch);
 console.log(myname);
 console.log(myrollnumber);
 console.log(mydob);

//add new key : id
student_id_card.id = 34;
 console.log(student_id_card);
 //update rollnumber key:


 student_id_card.rollnumber = 895647;

 delete student_id_card.dob;





