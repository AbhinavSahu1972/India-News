import React, { useState , useEffect } from "react";
import Navbar from "./Navbar";
import News from "./News";

function App() {

const [newsCategory, setnewsCategory] = useState('general');
console.log('category = ' , newsCategory);

const [newsData, setNewsData] = useState([]);
const apikey  = '433f805a6eb24b7684a3adc9533f35cb';
const url = `https://newsapi.org/v2/top-headlines?country=in&
category=${newsCategory}&apiKey=${apikey}`;

useEffect(() => {
  getData();
  
}, [newsCategory])

async function getData(){

  const response = await fetch(url);
  const data = await response.json();
  populataData(data.articles)
  
}
function populataData(articles){

  setNewsData(articles)
  console.log('populateData fired!')
}

return (
<>
  <Navbar setnewsCategory = {setnewsCategory}/>
  <News newsData = {newsData}/>
</>
    
);
}

export default App;
