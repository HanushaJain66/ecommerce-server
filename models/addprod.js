const Product = require("./product.js");

// Create 8 famous clothing products for men with all featured false and rating as integer
const products = [
  {
    name: "Gucci GG Supreme Canvas Jacket",
    description: "A stylish jacket from Gucci featuring the GG Supreme canvas.",
    richDescription: "Crafted from GG Supreme canvas with a vintage effect, this jacket features a stand-up collar and a zip front closure. It is a statement piece that adds a touch of luxury to any outfit. The jacket is lined in silk and has a detachable hood.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577151/Cloudinary-React/Gucci_GG_Supreme_Canvas_Jacket_u7yz2o.jpg",
    brand: "Gucci",
    price: 5500,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 10,
    isFeatured: false,
  },
  {
    name: "Louis Vuitton Monogram Denim Jacket",
    description: "A denim jacket from Louis Vuitton featuring the iconic Monogram pattern.",
    richDescription: "Crafted from Monogram denim, this jacket features a classic collar and a button front closure. It is a timeless piece that combines style and functionality. The jacket has four front pockets and adjustable cuffs.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577508/Cloudinary-React/Louis_Vuitton_Monogram_Denim_Jacket_o0lur8.png",
    brand: "Louis Vuitton",
    price: 2800,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 8,
    isFeatured: false,
  },
  {
    name: "Prada Nylon Bomber Jacket",
    description: "A nylon bomber jacket from Prada with a modern twist.",
    richDescription: "Crafted from technical nylon, this bomber jacket features a ribbed collar and cuffs, a zip front closure, and multiple pockets. It is a versatile piece that adds a contemporary edge to your look. The jacket has a detachable hood and is lined in Prada's signature logo jacquard fabric.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577246/Cloudinary-React/Prada_Nylon_Bomber_Jacket_x0c4n5.jpg",
    brand: "Prada",
    price: 7200,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 12,
    isFeatured: false,
  },
  {
    name: "Gucci Floral Embroidered Jacket",
    description: "A statement jacket from Gucci featuring floral embroidery.",
    richDescription: "Crafted from wool blend fabric, this jacket features colorful floral embroidery on the front and back. It has a button front closure and a classic collar. The jacket is fully lined in silk and has two front pockets.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577327/Cloudinary-React/Gucci_Floral_Embroidered_Jacke_txli0f.jpg",
    brand: "Gucci",
    price: 4500,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 6,
    isFeatured: false,
  },
  {
    name: "Gucci Sweatshirt",
    description: "An iconic sweatshirt from Gucci.",
    richDescription: "The Gucci sweatshirt is a timeless piece with a double-breasted front, featuring a point collar, shoulder epaulets, and a belted waist. It is a staple in every man's wardrobe. The trench coat is made from weatherproof cotton gabardine and has a signature check lining.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577161/Cloudinary-React/Gucci_Logo_Sweatshirt_evplpf.jpg",
    brand: "Gucci",
    price: 3800,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 5,
    isFeatured: false,
  },
  {
    name: "Prada Leather Biker Jacket",
    description: "A classic leather biker jacket from Prada.",
    richDescription: "Crafted from premium leather, this biker jacket features an asymmetrical zip front closure and multiple pockets. It has a slim fit design and is the perfect choice for adding a rugged edge to your look.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577146/Cloudinary-React/Prada_Leather_Biker_Jacket_zq42sj.jpg",
    brand: "Prada",
    price: 4200,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 8,
    isFeatured: false,
  },
  {
    name: "Gucci Wool Coat",
    description: "A luxurious wool coat from Gucci.",
    richDescription: "Crafted from premium wool, this coat features a double-breasted front with Gucci's signature tiger head buttons. It has a notched lapel and a tailored silhouette, perfect for adding a sophisticated touch to your winter wardrobe.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577318/Cloudinary-React/gucciwoolcoat_ypwgt1.jpg",
    brand: "Gucci",
    price: 3200,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 6,
    isFeatured: false,
  },
  {
    name: "Chanel Tweed Blazer",
    description: "An iconic tweed blazer from Chanel.",
    richDescription: "The Chanel tweed blazer is a timeless piece with a tailored silhouette, featuring a round neck, structured shoulders, and a button front closure. It is a staple in every man's wardrobe. The blazer is fully lined in silk and has two front pockets.",
    images: "https://res.cloudinary.com/dolzqjqfs/image/upload/v1708577190/Cloudinary-React/chaneelblazer_woyeyb.jpg",
    brand: "Chanel",
    price: 5600,
    discount: 0,
    rating: 4,
    category: "Mens",
    countInStock: 5,
    isFeatured: false,
  },
];

// Save products to database

products.forEach(async (product) => {
  const newProduct = new Product(product);
  await newProduct.save();
});
