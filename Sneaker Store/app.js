const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force 1",
    price: 150,
    colors: [
      {
        code: "black",
        img: "./img/Product/air.png",
        productDesc: "The Nike Air Force 1 is a classic sneaker known for its timeless style, versatility, and comfort.",


      },
      {
        code: "darkblue",
        img: "./img/Product/air2.png",
        productDesc: "The Nike Air Force 1 is a classic sneaker known for its timeless style, versatility, and comfort.",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 170,
    colors: [
        {
          code: "lightgray",
          img: "./img/Product/jordan.png",
          productDesc: "The Air Jordan is a legendary sneaker line created by Nike for basketball icon Michael Jordan.",


        },
        {
          code: "green",
          img: "./img/Product/jordan2.png",
          productDesc: "The Air Jordan is a legendary sneaker line created by Nike for basketball icon Michael Jordan.",
        },
      ],
  },
  {
    id: 3,
    title: "Nike Blazer",
    price: 130,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/blazer.png",
        productDesc: "The Nike Blazer is a vintage-inspired sneaker that blends retro charm with modern streetwear appeal.",
      

      },
      {
        code: "green",
        img: "./img/Product/blazer2.png",
        productDesc: "The Nike Blazer is a vintage-inspired sneaker that blends retro charm with modern streetwear appeal.",      
        },
    ],
  },
  {
    id: 4,
    title: "Nike Crater",
    price: 140,
    colors: [
      {
        code: "black",
        img: "./img/Product/crater.png",
        productDesc: "The Nike Crater series is Nike’s bold step toward sustainable design, combining eco-friendly materials with futuristic style.",
        
        
      },
      {
        code: "lightgray",
        img: "./img/Product/crater2.png",
        productDesc: "The Nike Crater series is Nike’s bold step toward sustainable design, combining eco-friendly materials with futuristic style.",
      },
    ],
  },
  {
    id: 5,
    title: "Nike Space Hippie",
    price: 90,
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png",
        productDesc: "The Nike Space Hippie is a futuristic sneaker collection built around sustainability, creativity, and rethinking waste.",
      

      },
      {
        code: "black",
        img: "./img/Product/hippie2.png",
        productDesc: "The Nike Space Hippie is a futuristic sneaker collection built around sustainability, creativity, and rethinking waste.",
      },
    ],
  },
  {
    id: 6,
    title: "Asics Gel 1130",
    price: 315,
    colors: [
      {
        code: "white",
        img: "./img/Product/asics.png",
        productDesc: "The ASICS Gel-1130 is a retro-inspired sneaker that brings back early 2000s running aesthetics while offering modern comfort.",
      },
      {
        code: "black",
        img: "./img/Product/asics2.png",
        productDesc: "The ASICS Gel-1130 is a retro-inspired sneaker that brings back early 2000s running aesthetics while offering modern comfort.",
      },
    ],
  },
  {
    id: 6,
    title: "Adidas ",
    price: 315,
    colors: [
      {
        code: "red",
        img: "./img/Product/adidas.png",
        productDesc: "Adidas is currently making waves with a mix of heritage revival, high-profile collaborations, and sustainable innovation.",
      },
      {
        code: "black",
        img: "./img/Product/adidas2.png",
        productDesc: "Adidas is currently making waves with a mix of heritage revival, high-profile collaborations, and sustainable innovation",
      },
    ],
  },
];
  
  let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.colors[0].productDesc;

    currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});
  
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
    currentProductDesc.textContent = choosenProduct.colors[index].productDesc;

  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
  
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
  
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
  
close.addEventListener("click", () => {
  payment.style.display = "none";
});