import Image1 from "../assets/images2/image2.jpg";
import Image2 from "../assets/images2/image5.jpg";
import Image3 from "../assets/images2/image3.jpg";
// Octopus Carpaccio :prod_PRhdzC1AIxArHl

// Roster Boster:  prod_PRhhy3TKVzqOaE

// Octopus Carpaccio:  prod_PRhdzC1AIxArHl
export const productsArray = [
  {
    id: "price_1OcoEgHFYlm7ckvVp3pIpiNt",
    title: " Octopus Carpaccio ",
    description: "Lemon, Fennel,Chives ",
    price: 30.35,
    Image: Image1,
  },
  {
    id: "price_1OcoIDHFYlm7ckvVdjgddyEa",
    title: " Roster Boste ",
    description: "Deep-Fried Chicken Fillet Burger ",
    price: 25.3,
    Image: Image2,
  },
  {
    id: "price_1OcoIsHFYlm7ckvVg1N3bWES",
    title: " Fish Kebab ",
    description: "The Best Fish Kebab ",
    price: 30.0,
    Image: Image3,
  },
];

export const getProductData = (id) => {
  let productData = productsArray.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
};
