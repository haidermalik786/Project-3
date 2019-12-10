console.log('no');
const dataJSON = [
    {
      product_name: "1) 1,500 live ladybugs",
      product_price: "$3.05",
      product_description: "We Guarantee Live Delivery!  Ladybugs are a must-have for organic gardening or organic farming. Ladybug eat insects during both the adult and larval stages, so you can buy ladybugs as adults and continue to have live ladybugs eating through other parts of their life cycle as they reproduce. Adults are beetles, often reddish-orange or yellow, with black markings. ",
      product_features: ["1,500 ladybugs.","cover approx.1000 sq. ft."],
      photo: "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/live-ladybugs.jpg"
    },
    {
      product_name: "2) peanut butter and jelly of the month club",
      product_price: "$468.96",
      product_description: "Great Gift",
      product_features: ["Variety of peanut butters and jelly randomly delivered every month"],
      photo: "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/peanut-butter-and-jelly-club.jpg"
    },
    {
      product_name: "3) Nicolas Cage sequin pillowcase",
      product_price: "$24.95",
      product_description: "Looking for a perfect Sequin Pillow Case? This one might be just for you! Exclusive vibrant Pillow Cover design, created by our in-house art designers",
      product_features: ["Precisely printed", "using eco-friendly water based inks"],
      photo: "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/nicolas-cage-pillow.jpg"
    },
    {
      product_name: "4) inflatable cat horn",
      product_price: "$6.02",
      product_description: "Your cat makes a show of being regal and in control, but you could turn all that around with this Inflatable Unicorn Horn for Cats. Why have just a regular cat, when you could have a uni-cat.",
      product_features: ["High Quality Vinyl","Four-Point Elastic Strap","Makes Your Cat Extraordinary"],
      photo: "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/inflatable-cat-horn.jpg"
    },
    {
      product_name: "5) Nothing",
      product_price: "$6.98",
      product_description: "What do you get for the person who has everything? Nothing—literally. But unlike traditional nothing, this one will cost you almost $7. ",
      product_features: ["nothing"],
      photo: "https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/nothing.jpg"
    }
  ];
  


  function Productfeature(product_features){
    return `
    <p>Features</p>
    <ul class="feature-list">
      ${product_features.map(Productfeature => `<li>${Productfeature}</li>`).join('')}
    </ul>
    `
  }

  function mytemplate(data){
    return `
    <div class="product">
      <img class="product-photo" src="${data.photo}">
      <h3 class="product-name">${data.name}</h3>
      <span class="price">(${data.price})</span>
      <p>${data.description}</p>
      ${feature(data.features)}
    </div>
  `
  }
  
  document.getElementById("app").innerHTML = `
    <h1 class="app-title">Weird Products</h1>
    ${dataJSON.map(storeTemplate).join('')}
  `
