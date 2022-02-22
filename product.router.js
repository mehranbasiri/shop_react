const router = require("express").Router();
const _ = require("lodash");
const data = {
  products: [
    {
      id: 1,
      title: "T_shirt",
      img: "https://freepngimg.com/thumb/tshirt/7-2-t-shirt-png-hd.png",
      category: "women",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "80",
    },
    {
      id: 2,
      title: "women clothes",
      img: "https://cdn.shopify.com/s/files/1/0364/6921/1274/products/10079RS-COBALT_2_900x.jpg?v=1615402716",
      category: "coat",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "52",
    },
    {
      id: 3,
      title: "Manto",
      img: "https://images.beautifulhalo.com/images/392x588/201710/N/simple-plain-round-neck-cap-shoulder-short-sleeve-smock-mini-dress_1509359387779.jpg",
      category: "jeans",
      size: ["L", "M", "S"],
      color: ["red", "blue"],
      price: "21",
    },
    {
      id: 4,
      title: "T_shirt",
      img: "https://cdn.shopify.com/s/files/1/1009/9408/products/TM310-066CarrolltonFitnessLS_Gunmetal_1200x1600_773bbba1-e4ce-4854-9dc0-ee5fd3e712d0.jpg?v=1626401333",
      category: "coat",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "105",
    },
    {
      id: 5,
      title: "Men clothes",
      img: "https://image1.superdry.com/static/images/optimised/zoom/upload9223368955665649639.jpg",
      category: "women",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "96",
    },
    {
      id: 6,
      title: "Summer T_shirt",
      img: "https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7C71xMRW6ffLL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png",
      category: "women",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "20",
    },
    {
      id: 7,
      title: "Baseball cap",
      img: "https://capshop.store/wp-content/uploads/2019/10/Cock-Embroidery-Baseball-Cap-Men-Women-Snapback-Caps-Breathable-Mesh-Hip-Hop-Hats-Unisex-Casual-Eat-600x600.jpg",
      category: "women",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "80",
    },
    {
      id: 8,
      title: "under_armour_heathered",
      img: "https://www.captain-lax.com/images/products/m/under_armour_heathered_blitzing_30_kappe_6535_0.jpg",
      category: "men",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "35",
    },
    {
      id: 9,
      title: "Summers",
      img: "https://i.etsystatic.com/16164065/r/il/1dcd98/2028341188/il_794xN.2028341188_pt3d.jpg",
      category: "women",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "80",
    },
    {
      id: 11,
      title: "casual-men-shirt-social",
      img: "https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/n/e/new-autumn-fashion-brand-men-clothes-slim-fit-men-long-sleeve-shirt-men-polka-dot-casual-men-shirt-social-plus-size-extra-image-4.jpg",
      category: "men",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "50",
    },
    {
      id: 12,
      img: "https://www.nautica.com/on/demandware.static/-/Sites-nau-Library/default/dw0d1389b6/mens-dp/2021/081821/0818_DT_Sustainably_Craftetd%402x.png",
      category: "coat",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "50",
    },
    {
      id: 13,
      img: "https://mauricesprodatg.scene7.com/is/image/mauricesProdATG/125079_C3407?$large$",
      title: "SHIRT STYLE!",
      category: "women",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "57",
    },
    {
      id: 14,
      img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/http%3A%2F%2Fimage.eston.top%3A24980%2Ffms%2Fpublic%2F2019-04-108%2Faad2526d-6341-4e83-9909-44f49a3ced43%2F6EE701783-4.jpg",
      title: "LOUGEWEAR LOVE",
      category: "coat",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "50",
    },
    {
      id: 15,
      img: "https://cdn.shopify.com/s/files/1/0217/6856/products/Frontviewofbasiclongsleevesbuttondownfitteddenimjeanjackets_grande.jpg?v=1610956520",
      title: "LIGHT JACKETS",
      category: "jeans",
      size: ["L", "M", "S", "Xl"],
      color: ["red", "blue", "green", "black", "white"],
      price: "80",
    },
  ],
};
// //GET PRODUCT
// router.get("/find/:id", async (req, res) => {
//   try {
//     const product = await data.products.findById(req.params.id);
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", (req, res) => {
  if (req.query.q) {
    const result = _.filter(
      data.products,
      (item) =>
        item.title.toLowerCase().includes(req.query.q.toLowerCase()) ||
        item.desc.toLowerCase().includes(req.query.q.toLowerCase())
    );
    res.json(result);
  } else {
    res.json(data.products);
  }
});

router.get("/:id", (req, res) => {
  res.json(_.find(data.products, { id: req.params.id }));
});

router.get("/:id/comments", (req, res) => {
  res.json(_.get(_.find(data.products, { id: req.params.id }), "comments"));
});

router.post("/:id/comments", (req, res) => {
  const product = _.find(data.products, { id: req.params.id });
  if (product) {
    product.comments = product.comments || [];
    product.comments.push(req.body);
    res.end();
  } else {
    res.status(404).json(new Error("Product not found"));
  }
});

module.exports = router;
