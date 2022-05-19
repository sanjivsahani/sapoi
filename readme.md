// removing the duplicate value in arry 
let  arr = [1,5,3,4,7,1,5,1,4,2,5,6,2,8]
console.log([...new Set(arr)])



// shorting the array

// using the bubble short 
let a = [8,5,6,9,4]

function bubblshort  (arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[j+1]<arr[j]){
        [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
      }
    }
  }return arr
}
console.log(bubblshort(a))
 


// find the maximun number and minimum number in js 

function max_min (arr){
  let min = arr[0]
  let max = arr [0]
for(let i = 0; i<=arr.length;i++){
  if(min>arr[i]){
    min = arr[i]
  }if(max<arr[i]){
    max= arr[i]
  }
}return [min, max]
}
console.log(max_min([8,4,2,9]))
  



 // write a programm to reverse the array

let arr = [1,2,3,4,5,6,7,8,9]
function reverse (arr){
  let temp =[]
  let n = arr.length
 for(let i=n-1;i>=0;i--){
temp.push(arr[i])   

}return temp 
 }
console.log(reverse(arr))

let arr = [1,2,3,4,5,6,7,8,9]
// write a programming to find the k th largest numbr of k smallest number 

function find (arr,l,s){
  
    let largest = arr.length-[l-1]
    let smallest = arr[s-1]
  for(let i = 0; i<arr.length;i++){
    
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j+1]<arr[j]){
        [arr[j+1],arr[j]]= [arr[j],arr[j+1]]
      }
    }
  }return [largest, smallest]
}
console.log(find(arr,2,2))

// find occourance 
let arr = [1,5,1,5,4,2,7,1,1,]
let val = 10
function find_occ (arr,value){
  let occ = 0;
  for(let i=0; i<=arr.length;i++){
   if(value == [arr[i]]) {
     occ++
   }else{
     return "not found"
   }
  }return occ
}
console.log(find_occ(arr,val)) 