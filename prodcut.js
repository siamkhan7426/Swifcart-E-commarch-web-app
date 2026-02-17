// ---------------------loading sdpinner function star-----------------

const loadSpinner =(stus)=>{
  if(stus=== true){
      document.getElementById("spinner").classList.remove("hidden");
      document.getElementById("all-procut-card-container").classList.add("hidden");
  }else{
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("all-procut-card-container").classList.remove("hidden");
  }
};

// ---------------------loading sdpinner function end -----------------

// -------------------------------------remove active class function -----------------
const RemoveActive = ()=>{
  const dynamicBtn = document.querySelectorAll(".dynamic-btn");
  dynamicBtn.forEach(btn=>btn.classList.remove("active"));
}

// -------------------------------------remove active class function -----------------

// ------------------------load dynamic buttum card fuction call ---------------------
const loadCategoriApiData = async (categorisId)=>{
    loadSpinner(true)
        const res = await fetch(`https://fakestoreapi.com/products/category/${(categorisId)}`);
        const data = await res.json();
        {
        RemoveActive()
       const activeBtn = document.getElementById(`active-btn-${categorisId}`);
        activeBtn.classList.add("active");
        loadDisplyDynamicCatgoriCard(data);
        }

        
};
// ------------------------load dynamic buttum card fuction call ---------------------



// -------------------------------load dynamic button categroy card show ------------

const loadDisplyDynamicCatgoriCard = (catageri)=>{
    const AllProdcutCardContainer = document.getElementById("all-procut-card-container");
    AllProdcutCardContainer.innerHTML = "";
    catageri.forEach(cardElement => { 
        const { category,id, description, image, price, rating:rate, rating: count, title } = cardElement
        const div = document.createElement("div");
        div.innerHTML = `
       <div class="w-full h-full border-1 border-gray-300 rounded-lg space-y-2">
        <div class="bg-gray-400 rounded-lg ">
      <img class="w-1/2 h-72 bg-center  py-4 mx-auto rounded-sm " src="${image}" alt="">
     </div>
     <div class="flex items-center justify-between px-4 ">
      <h6 class="bg-purple-200 px-2 rounded-lg">${category}</h6>
      <span><i class="fa-solid fa-star text-amber-400 font-semibold"></i> ${rate.rate} (${count.count})</span>
    </div>
    <h3 class="text-lg font-semibold text-justify px-4">${description.slice(0,40)}</h3>
    <h2 class="text-lg font-semibold px-4">$${price}</h2>
    <div class="flex  justify-between px-4 items-center mb-4 ">
      <button onclick="loadIdFucntion(${id})"  class="btn btn-outline"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Add</button>
    </div>
  </div>
       
       `
        AllProdcutCardContainer.append(div);
    });
     loadSpinner(false)
};

// -------------------------------load dynamic button categroy card show end ------------



// ------------------------- loadidFunction dynamic api star------------------------
const loadIdFucntion = async (id)=>{
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await res.json();
  loadDynamicModalFunction(data);
};
// ------------------------- loadidFunction dynamic api end------------------------




// -----------------------------dynamic modal show star---------------------------
  const loadDynamicModalFunction = (modal)=>{
  const { description,image,  rating:rate, rating: count, title }= modal
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
          <div class="space-y-2">
            <div class="bg-gray-400 rounded-lg ">
           <img class="w-1/2 h-72 bg-center  py-4 mx-auto rounded-sm " src="${image}" alt="">
        </div>
         <h1 class="text-2xl font-semibold">${title}</h1>
        <p class="text-sm">${description}</p>
        <span ><i class="fa-solid fa-star text-amber-400 font-semibold"></i> ${rate.rate} (${count.count})</span>
        <div class="mt-5" class="flex gap-4 md:gap-6 items-center">
        <button class="btn btn-primary">By Now</button>
        <button class="btn btn-primary">Add Cart</button>
      </div>
    </div>
  `
document.getElementById("my_modal").showModal()
};
// -----------------------------dynamic modal show end--------------------



// -------------------------trendingDataLoadAPi function create----------------
const trendingDataLoadAPi = async () => {
    const responsive = await fetch("https://fakestoreapi.com/products");
    const data = await responsive.json();
    displayCardTrending(data);
};
 trendingDataLoadAPi();
// -------------------------trendingDataLoadAPi function create----------------


// -----------------------------------display Card 3 trending api function-----------------------------
const displayCardTrending = (Cards) => {
    const AllProdcutCardContainer = document.getElementById("all-procut-card-container");
    AllProdcutCardContainer.innerHTML ="";
    Cards.forEach(cardElement => { 
        const { category,id, description, image, price, rating:rate, rating: count, title } = cardElement
        const div = document.createElement("div");
        div.innerHTML = `
       <div class="w-full h-full border-1 border-gray-300 rounded-lg space-y-2">
        <div class="bg-gray-400 rounded-lg ">
      <img class="w-1/2 h-72 bg-center  py-4 mx-auto rounded-sm " src="${image}" alt="">
     </div>
     <div class="flex items-center justify-between px-4 ">
      <h6 class="bg-purple-200 px-2 rounded-lg">${category}</h6>
      <span><i class="fa-solid fa-star text-amber-400 font-semibold"></i> ${rate.rate} (${count.count})</span>
    </div>
    <h3 class="text-lg font-semibold text-justify px-4">${description.slice(0,30)}</h3>
    <h2 class="text-lg font-semibold px-4">$${price}</h2>
    <div class="flex  justify-between px-4 items-center mb-4 ">
      <button onclick="loadIdFucntion(${id})"  class="btn btn-outline"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Add</button>
    </div>
  </div>
       
       `
        AllProdcutCardContainer.append(div);
    });
};
// -----------------------------------display Card 3 trending api function-----------------------------


// --------------------disply daynamic button function----------------------
 const displybtnDynamic = (btnCategori)=>{
        const buttonDaynamicContainer = document.getElementById("button-daynamic-container");
        // buttonDaynamicContainer.innerHTML = "";
         btnCategori.forEach(btn=> {
         const button = document.createElement("button");
         button.className ="btn btn-outline btn-primary dynamic-btn"
         button.id=`active-btn-${btn}`;
         button.innerHTML = btn
         button.addEventListener("click", () => loadCategoriApiData(btn));
       buttonDaynamicContainer.appendChild(button)
    });
     loadSpinner(false)
 };
// --------------------disply daynamic button function----------------------


// ----------------------dynamic button api  call function ---------------------
 const loadDynamicBtnApi = async ()=>{
   loadSpinner(true)
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
      displybtnDynamic(data);
    
   
 };
loadDynamicBtnApi ();


