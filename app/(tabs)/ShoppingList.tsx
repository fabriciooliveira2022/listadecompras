// ShoppingList.tsx
import React, { useState } from 'react';
import { View, FlatList, Button, Text } from 'react-native';

interface Product {
  name: string;
  quantity: number;
  price: number;
}

interface ShoppingListProps {
  products: Product[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ products }) => {
  const [shoppingList, setShoppingList] = useState<Product[]>([]);

  const addProductToList = (product: Product) => {
    setShoppingList(prev => [...prev, product]);
  };

  const removeProductFromList = (name: string) => {
    setShoppingList(prev => prev.filter(product => product.name !== name));
  };

  const clearList = () => {
    setShoppingList([]);
  };

  const totalAmount = shoppingList.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <View>
      <FlatList
        data={shoppingList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}: {item.quantity} x {item.price}</Text>
            <Button title="Remover" onPress={() => removeProductFromList(item.name)} />
          </View>
        )}
        keyExtractor={item => item.name}
      />
      <Text>Total: {totalAmount.toFixed(2)}</Text>
      <Button title="Limpar Lista" onPress={clearList} />
    </View>
  );
};

export default ShoppingList;
