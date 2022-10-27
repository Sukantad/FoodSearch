
import { navbar } from "./foodnavbar.js";
document.getElementById("navbar").innerHTML = navbar();



import { random ,homeDisplay, displayData, searchItem } from "./random.js";

 random("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian").then(res =>{
  console.log(res);
  homeDisplay(res, document.getElementById("container"))
 });
  



 
 document.getElementById("searchBtn").addEventListener("click", () =>{
    searchFood();
 });

const  searchFood = () => {
  document.getElementById("container").innerHTML = "";
  let queryParm= document.getElementById("searchBar").value;
  
  searchItem('https://www.themealdb.com/api/json/v1/1/search.php?s=', queryParm).then(res => {
        displayData(res, document.getElementById("container"))
  });

}