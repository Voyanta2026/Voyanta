
const hotels = [
 {name:"Hotel Amsterdam Central", city:"Amsterdam", price:120},
 {name:"Barcelona Beach Resort", city:"Barcelona", price:150},
 {name:"Bali Jungle Villa", city:"Bali", price:200}
];

function searchHotels(){
 const q = document.getElementById("search").value.toLowerCase();
 const results = hotels.filter(h=>h.city.toLowerCase().includes(q));
 const div = document.getElementById("results");
 div.innerHTML = results.map(h=>
   `<div class='card'>
     <h3>${h.name}</h3>
     <p>${h.city} - €${h.price}/nacht</p>
     <a class='btn' href='hotel.html'>Bekijk</a>
   </div>`
 ).join("");
}
