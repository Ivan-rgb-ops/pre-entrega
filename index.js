const [method, resource, ...params] = process.argv.slice(2);

const API_URL = "https://fakestoreapi.com/products";
const headers = { "User-Agent": "Mozilla/5.0" };

const getAllProducts = async () => {
  try {
    const response = await fetch(API_URL, { headers });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { headers });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Nueva función para crear productos
const createProduct = async (title, price, category) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        price: Number(price), // Aseguramos que sea un número
        category
      })
    });
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const newProduct = await response.json();
    console.log("Producto creado con éxito:", newProduct);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

if (method === "GET") {
  if (resource === "products") {
    getAllProducts();
  } else if (resource && resource.startsWith("products/")) {
    const id = resource.split("/")[1];
    getProductById(id);
  }
} else if (method === "POST" && resource === "products") {
  const [title, price, category] = params;
  createProduct(title, price, category);
}