// AddProduct.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface AddProductProps {
  onAddProduct: (product: { name: string; quantity: number; price: number }) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ onAddProduct }) => {
  const [name, setName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleAddProduct = () => {
    if (name && quantity && price) {
      onAddProduct({ name, quantity: parseInt(quantity), price: parseFloat(price) });
      setName('');
      setQuantity('');
      setPrice('');
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome do Produto" value={name} onChangeText={setName} />
      <TextInput placeholder="Quantidade" value={quantity} keyboardType="numeric" onChangeText={setQuantity} />
      <TextInput placeholder="Preço Unitário" value={price} keyboardType="numeric" onChangeText={setPrice} />
      <Button title="Cadastrar Produto" onPress={handleAddProduct} />
    </View>
  );
};

export default AddProduct;
