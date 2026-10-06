const [method, resource, ...params] = process.argv.slice(2);

const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Nueva función para un producto por ID
const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

if (method === "GET") {
  if (resource === "products") {
    getAllProducts();
  } else if (resource && resource.startsWith("products/")) {
    const id = resource.split("/")[1]; // Separa "products/15" y agarra el "15"
    getProductById(id);
  }
}