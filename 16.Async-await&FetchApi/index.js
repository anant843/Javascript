//Async-await & Fetch API
//Await can be used only inside async function

// async function fetchData() {
//     setTimeout (function(){
//         console.log("Data fetched successfully!")
//     },3000);
//     }
//    let output= fetchData();


//scenario
//prepare url / api endpoint ->sync
//await //fetch data ->network call ->async
//process data ->sync

    // async function fetchData() {
    //     //get data from this url using fetch api-async
    //     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    //     //parse json-async
    //     let data = await response.json();
    //     console.log(data);
    // }
    // fetchData();


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url="https://jsonplaceholder.typicode.com/posts";

const options= {
  method: "POST",
  body: JSON.stringify({ username: "Anant" }),
  headers: myHeaders,
}
async function getdata(){
    const url="https://dummyjson.com/posts";
    const response = await fetch(url);
     let data= await response.json();
    console.log("getdata response:",data);

}
async function postData(){
    const response = await fetch(url, options);
    let data= await response.json();
    console.log("postdata response:",data);
}
async function processdata(){
    await postData();    
    await getdata();
}
processdata();

