console.log("1st");
console.log("2nd");
const promoisewillbring3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('ticket')
  },3000)
});
const asyncro=async()=>promoisewillbring3
  console.log("3rd")

console.log("4th")
console.log("5th")





//-----------------------------------------------------------------------------------------------
//
console.log('person1 shows ticket');
console.log('person2 shows ticket');
async function main(){
const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 1000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 1000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 1000);
  });
 const getColdDrinks =new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('colddrinks')},1000);
 });
 
  await person3PromiseToShowTicketWhenWifeArrives;
  console.log("tickets got")
  await getPopcorn;
  console.log(" got popcorn")
  await addButter;
  console.log("added butter")
  await getColdDrinks;
  console.log("got Cold drinks")
 }
 console.log('person1 shows ticket');
console.log('person2 shows ticket');
 main();
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
