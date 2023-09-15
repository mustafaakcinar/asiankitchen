const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let foodDOM = document.querySelector("#foods")



// button for all food
const button1 = document.createElement("button")
button1.classList.add("btn", "btn-success", "btn-item")
button1.setAttribute("id", "All")
button1.textContent = "All"
const btn1 = document.querySelector(".btn-container");
btn1.appendChild(button1);


// button for korea foods
const button2 = document.createElement("button")
button2.classList.add("btn", "btn-success", "btn-item")
button2.setAttribute("id", "korea")
button2.textContent = "Korea"
const btn2 = document.querySelector(".btn-container");
btn2.appendChild(button2);


// button for japan food
const button3 = document.createElement("button")
button3.classList.add("btn", "btn-success", "btn-item")
button3.setAttribute("id", "japan")
button3.textContent = "Japan"
const btn3 = document.querySelector(".btn-container");
btn3.appendChild(button3);


// button for china food
const button4 = document.createElement("button")
button4.classList.add("btn", "btn-success", "btn-item")
button4.setAttribute("id", "china")
button4.textContent = "China"
const btn4 = document.querySelector(".btn-container");
btn4.appendChild(button4);


button1.addEventListener("click", allFood )
button2.addEventListener("click", koreaFood)
button3.addEventListener("click", japanFood)
button4.addEventListener("click", chinaFood)

function allFood() {
  let allFoods = menu.map((menu) => {
    return `  <div class="menu-items col-lg-6 col-sm-12">
                  
    <img src="${menu.img}" alt="${menu.title}" class="photo">
              
                  <div class="menu-info">
                    <div class="menu-title">
                      <h4>${menu.title}</h4>
                      <h4 class="price">${menu.price}</h4>
                    </div>

                    <div class="menu-text">${menu.desc}</div>
                  </div>
              </div>
    `;
  }) 
 foodDOM.innerHTML = allFoods.join("")
}

function koreaFood() {
let koreaFood = menu.map(menu => {
  if(menu.category == "Korea") {
    return `<div class="menu-items col-lg-6 col-sm-12">
                  
    <img src="${menu.img}" alt="${menu.title}" class="photo">
              
                  <div class="menu-info">
                    <div class="menu-title">
                      <h4>${menu.title}</h4>
                      <h4 class="price">${menu.price}</h4>
                    </div>

                    <div class="menu-text">${menu.desc}</div>
                  </div>
              </div>`
  }
})
foodDOM.innerHTML = koreaFood.join("")
}

function japanFood() {
  let japanFood = menu.map(menu => {
    if(menu.category == "Japan") {
      return `<div class="menu-items col-lg-6 col-sm-12">
                    
      <img src="${menu.img}" alt="${menu.title}" class="photo">
                
                    <div class="menu-info">
                      <div class="menu-title">
                        <h4>${menu.title}</h4>
                        <h4 class="price">${menu.price}</h4>
                      </div>
  
                      <div class="menu-text">${menu.desc}</div>
                    </div>
                </div>`
    }
  })
  foodDOM.innerHTML = japanFood.join("")
  }

function chinaFood() {
  let chinaFood = menu.map(menu => {
    if(menu.category == "China") {
      return `<div class="menu-items col-lg-6 col-sm-12">
                    
      <img src="${menu.img}" alt="${menu.title}" class="photo">
                
                    <div class="menu-info">
                      <div class="menu-title">
                        <h4>${menu.title}</h4>
                        <h4 class="price">${menu.price}</h4>
                      </div>
  
                      <div class="menu-text">${menu.desc}</div>
                    </div>
                </div>`
    }
  })
  foodDOM.innerHTML = chinaFood.join("")
  }

allFood()
