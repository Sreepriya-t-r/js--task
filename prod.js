// 5) Online Store Product Filter
// Scenario: You have an e-commerce store and want to filter products based on a search query.
const products = [
    { name: "iPhone 13", category: "Electronics" },
    { name: "MacBook Pro", category: "Electronics" },
    { name: "Nike Shoes", category: "Fashion" },
    { name: "Adidas Jacket", category: "Fashion" }
  ];
  
  function filterProducts(val) {
  return products.filter((a)=>a.category==val|| a.name==val).map((b)=>b.name)
    
    
    
  }
  
  console.log(filterProducts("Electronics"));  
  console.log(filterProducts("Nike Shoes"));       