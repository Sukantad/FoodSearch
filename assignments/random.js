export const searchItem = async (url, queryParm) => {
    try {
      let res = await fetch(url + queryParm) 
      console.log(res+"test");
      let data = await res.json();
      console.log(data.meals, "DATA");
      return data.meals;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const random = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      console.log(data, "DATA");
      return data.meals;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const displayData = (data, parEle) => {
    data.forEach(( {   strMealThumb, strMeal, strCategory,strArea, strMeasure3,  strInstructions, strMeasure1, strMeasure4,  strMeasure9,}  ) => {
        parEle.innerHTML += ` <div class="card">

         <div class="cardImg">
             <img src=${strMealThumb} alt="IMAGE">
         </div>
         <div class="title">
         <h2> 
         ${strMeal} </h2> </div>
         <div id="details"> 
        
         <h3> Catagory: ${strCategory}</h3>
         <h3> Weight : ${strMeasure3}</h3>
         <h3> Area : ${strArea}</h3>
        
         <button id="click"> Show Instructions</button>
        
         </div>
         <div id="ing">

         <p>${strInstructions}</p> </div>
        
      </div>`;
      }
    );
    document.getElementById("click").addEventListener("click", justforFun);
    function justforFun(){

     document.getElementById("ing").style.display="block";
    
    }

  };
  
  
  

    export const homeDisplay = (data, parEle) => {
      console.log
    data.forEach(( {   strMealThumb, strMeal}  ) => {
        parEle.innerHTML += ` <div class="card">

         <div class="cardImg">
             <img src=${strMealThumb} alt="IMAGE">
         </div>
         <div class="title">
         <h2> 
         ${strMeal} </h2> </div>
       
        
      </div>`;
      }
    );
  };
  
  
  