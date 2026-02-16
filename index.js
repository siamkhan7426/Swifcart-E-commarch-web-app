
// -------------------------trendingDataLoadAPi function create----------------
const trendingDataLoadAPi = async () => {
    const responsive = await fetch("https://fakestoreapi.com/products");
    const data = await responsive.json();
    displayCardTrending(data);
}
trendingDataLoadAPi()


// ------------------------------- displayCard trendingDataLoadAPi --------------------

/***
 * category
: 
"men's clothing"
description
: 
"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
id
: 
2
image
: 
"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
price
: 
22.3
rating
: 
{rate: 4.1, count: 259}
title
: 
"Mens Casual Premium Slim Fit T-Shirts "
 */

const displayCardTrending = (threCards) => {
    const cardContainer = document.getElementById("card-continer");
    const cardRating = threCards.filter(item => item.rating.rate > 4).slice(0,3);
    cardRating.forEach(cardElement => {
       
        const { category, description, image, price, rating:rate, rating: count, title } = cardElement
        console.log(description);
        const div = document.createElement("div");
        div.innerHTML = `
       <div class="w-full h-full border-1 border-gray-300 rounded-lg space-y-2">
        <div class="bg-gray-400 rounded-lg ">
      <img class="w-1/2 h-72 bg-center  py-4 mx-auto rounded-sm " src="${image}" alt="">
     </div>
     <div class="flex items-center justify-between px-4 ">
      <h6 class="bg-purple-200 px-2 rounded-lg">${category}</h6>
      <span><i class="fa-solid fa-star text-amber-400 font-semibold"></i> ${rate.rate} ${count.count}</span>
    </div>
    <h3 class="text-lg font-semibold text-justify px-4">${description.slice(0,40)}</h3>
    <h2 class="text-lg font-semibold px-4">$${price}</h2>
    <div class="flex  justify-between px-4 items-center mb-4 ">
      <button class="btn btn-soft"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Add</button>
    </div>
  </div>
       
       `
        cardContainer.append(div)
    });

    // const {category,description,image,price,rating:rate, rating:count,title} = cards
    // console.log(category);


}
