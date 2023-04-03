class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.code || !product.stock) {
        console.error("Error: todos los campos son obligatorios");
        return;
      }
  
      if (this.products.find(p => p.code === product.code)) {
        console.error("Error: ya existe un producto con el mismo código");
        return;
      }
  
      product.id = this.nextId++;
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
  
      if (!product) {
        console.error("Error: producto no encontrado");
        return null;
      }
  
      return product;
    }
  }
  const productManager = new ProductManager();
  
  productManager.addProduct({
    title: "Seguro 1",
    description: "Descripción del producto 1",
    price: 10,
    code: "Palencia1234",
    stock: 20
  });
  
  productManager.addProduct({
    title: "Seguro 2",
    description: "Descripción del producto 2",
    price: 15,
    code: "Palencia5678",
    stock: 30
  });
  
  console.log(productManager.getProducts());
  console.log(productManager.getProductById(1));
  console.log(productManager.getProductById(3));
  