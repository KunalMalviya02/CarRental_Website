let catalog = {
  data: [
      {
          carName: "Dezier 2022",
          img: "https://th.bing.com/th/id/OIP.mvID_-AoRecR4kMjeG3gGAHaFB?rs=1&pid=ImgDetMain",
          fuel: "Petrol",
          category: "Manual",
          rating: 4.3,
          trips: 17,
          horsepower: 1200,
          rate: 400,
          exFee: 240,
          type:"hachback"
      },
      {
          carName: "Vista 2016",
          img: "https://4.imimg.com/data4/LJ/FW/GLADMIN-8937745/tata-indica-vista-500x500.jpg",
          fuel: "Diesel",
          category: "Manual",
          rating: 3.3,
          trips: 19,
          horsepower: 1200,
          rate: 300,
          exFee: 240,
           type:"hachback"
      },
      {
          carName: "Verna 2022",
          img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230329090248_Opening.jpg&w=726&h=482&q=75&c=1",
          fuel: "Petrol",
          category: "Auto",
          rating: 4.8,
          trips: 10,
          horsepower: 1400,
          rate: 600,
          exFee: 240,
           type:"sedan"
      },
      {
          carName: "Civic 2024",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqULY24RidvNO9Q2HdU_qVqkQz83Oi-fgE6jvTYCJKw&s",
          fuel: "Petrol",
          category: "Auto",
          rating: 5.0,
          trips: 7,
          horsepower: 1400,
          rate: 600,
          exFee: 240,
           type:"sedan"
      },
      {
          carName: "Ertiga 2020",
          img: "https://images.hindustantimes.com/auto/img/2024/02/09/1600x900/Maruti_Ertiga_1707455490111_1707455490277.jpg",
          fuel: "Diesel",
          category: "Manual",
          rating: 3.3,
          trips: 17,
          horsepower: 1600,
          rate: 400,
          exFee: 240,
           type:"suv"
      },
      {
          carName: "Innova 2015",
          img: "https://www.team-bhp.com/sites/default/files/pictures2023-09/inn1.jpeg",
          fuel: "Diesel",
          category: "Manual",
          rating: 2.3,
          trips: 17,
          horsepower: 1600,
          rate: 400,
          exFee: 240,
          type:"suv"

      },
      {
          carName: "Swift 2022",
          img: "https://th.bing.com/th/id/OIP.mvID_-AoRecR4kMjeG3gGAHaFB?rs=1&pid=ImgDetMain",
          fuel: "Petrol",
          category: "Manual",
          rating: 4.3,
          trips: 17,
          horsepower: 1200,
          rate: 400,
          exFee: 240,
          type:"hachback"

      },
  ],
};

// Render Products
function renderProducts(data) {
  let productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  for (let car of data) {
      let card = document.createElement("div");
      card.classList.add("card", car.category);

      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
      let image = document.createElement("img");
      image.setAttribute("src", car.img);
      image.setAttribute("loading", "lazy");
      imgContainer.appendChild(image);
      card.appendChild(imgContainer);

      let container = document.createElement("div");
      container.classList.add("container");

      let name = document.createElement("h4");
      name.classList.add("product-name");
      name.innerText = car.carName;
      container.appendChild(name);

      let rate = document.createElement("h5");
      rate.innerText = "Rate: ₹" + car.rate + "/hr";
      container.appendChild(rate);

      let rating = document.createElement("p");
      rating.innerText = "Rating: " + car.rating + "/5";
      container.appendChild(rating);

      let fuel = document.createElement("p");
      fuel.innerText = "Fuel: " + car.fuel;
      container.appendChild(fuel);

      let exFee = document.createElement("p");
      exFee.innerText = "Extra Fee: ₹" + car.exFee;
      container.appendChild(exFee);

      card.appendChild(container);
      productsContainer.appendChild(card);
  }
}

// Filters
function filterProduct(criteria) {
  let filteredData;
  switch (criteria) {
      case "low-cost":
          filteredData = catalog.data.sort((a, b) => a.rate - b.rate);
          break;
      case "high-cost":
          filteredData = catalog.data.sort((a, b) => b.rate - a.rate);
          break;
      case "high-rating":
          filteredData = catalog.data.sort((a, b) => b.rating - a.rating);
          break;
      case "manual":
          filteredData = catalog.data.filter(car => car.category.toLowerCase() === "manual");
          break;
      case "auto":
          filteredData = catalog.data.filter(car => car.category.toLowerCase() === "auto");
          break;
      case "suv":
        filteredData = catalog.data.filter(car => car.type.toLowerCase() === "suv");
          break;
      case "sedan":
        filteredData = catalog.data.filter(car => car.type.toLowerCase() === "sedan");
          break;
      case "hachback":
        filteredData = catalog.data.filter(car => car.type.toLowerCase() === "hachback");
          break;
      case "revert" :
        filteredData = catalog.data;
        break;
      default:
          filteredData = catalog.data;
  }
  renderProducts(filteredData);
}

// Search
function searchProduct() {
  let searchInput = document.getElementById("search-input").value.toLowerCase();
  let filteredData = catalog.data.filter(car => car.carName.toLowerCase().includes(searchInput));
  renderProducts(filteredData);
}

// Initial Render
window.onload = () => {
  renderProducts(catalog.data);
};
