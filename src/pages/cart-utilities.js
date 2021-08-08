export const addToCart = (existingCartList, newProduct) => {
    let updatedCart;
    const currentItem = existingCartList.find(
      (item) => item.id === newProduct.id
    );
    if (currentItem === undefined) {
      const itemToAdd = { ...newProduct, quantity: 1 };
      existingCartList = [...existingCartList, itemToAdd];
      updatedCart = existingCartList;
    } else {
      existingCartList = existingCartList.map((item) => {
        if (item.id === newProduct.id) {
          item.quantity += 1;
        }
        return item;
      });
      updatedCart = existingCartList;
    }
    return updatedCart;
  };

export const removeFromCart = (existingCartList, product) => {
    let updatedCart;
    const currentItem = existingCartList.find(
      (item) => item.id === product.id
    );
    if (currentItem === undefined) {
      console.log("item does not exist in cart");
      updatedCart = existingCartList;
    } else {
      existingCartList = existingCartList.map((item) => {
        if (item.id === product.id) {
          item.quantity >= 1
            ? (item.quantity -= 1)
            : (item.quantity = 0);
        }
        return item;
      });
      updatedCart = existingCartList;
    }
    return updatedCart;
  };