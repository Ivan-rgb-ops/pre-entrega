const [method, resource, ...params] = process.argv.slice(2);

const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      }
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.error("No se pudieron obtener los productos:", error.message);
  }
};

if (method === "GET" && resource === "products") {
  getAllProducts();
}