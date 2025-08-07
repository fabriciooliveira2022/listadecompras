// CreateList.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

interface CreateListProps {
  products: { name: string; quantity: number; price: number }[];
  onSaveList: (list: { name: string; products: string[] }) => void;
}

const CreateList: React.FC<CreateListProps> = ({ products, onSaveList }) => {
  const [listName, setListName] = useState<string>('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (product: string) => {
    setSelectedProducts(prev => {
      if (prev.includes(product)) {
        return prev.filter(p => p !== product);
      }
      return [...prev, product];
    });
  };

  const handleSaveList = () => {
    if (listName) {
      onSaveList({ name: listName, products: selectedProducts });
      setListName('');
      setSelectedProducts([]);
    }
  };

  return (
    <View>
      <TextInput placeholder="Nome da Lista" value={listName} onChangeText={setListName} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Text onPress={() => toggleProduct(item.name)} style={{ backgroundColor: selectedProducts.includes(item.name) ? 'lightgray' : 'white' }}>
            {item.name}
          </Text>
        )}
        keyExtractor={item => item.name}
      />
      <Button title="Salvar Lista" onPress={handleSaveList} />
    </View>
  );
};

export default CreateList;
