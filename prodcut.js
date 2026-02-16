// --------------------disply daynamic button function----------------------

const displybtnDynamic = (btnCategori)=>{
    const buttonDaynamicContainer = document.getElementById("button-daynamic-container");
    btnCategori.forEach(btn=> {
        console.log(btn);
        const button = document.createElement("button");
        button.className ="btn btn-outline btn-primary "

       button.innerHTML = `${btn}`

       buttonDaynamicContainer.append(button)
    });

};

// ----------------------dynamic button api  call function ---------------------
 const loadDynamicBtnApi = async ()=>{
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
   displybtnDynamic(data);
    

 }
loadDynamicBtnApi ()


