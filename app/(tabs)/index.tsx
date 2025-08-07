// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import CreateList from './CreateList';
import ShoppingList from './ShoppingList';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  const [products, setProducts] = useState<{ name: string; quantity: number; price: number }[]>([]);
  const [savedLists, setSavedLists] = useState<{ name: string; products: string[] }[]>([]);

  const handleAddProduct = (product: { name: string; quantity: number; price: number }) => {
    setProducts(prev => [...prev, product]);
  };

  const handleSaveList = (list: { name: string; products: string[] }) => {
    setSavedLists(prev => [...prev, list]);
  };

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard">
          {() => <Dashboard products={products} />}
        </Drawer.Screen>
        <Drawer.Screen name="Adicionar Produto">
          {() => <AddProduct onAddProduct={handleAddProduct} />}
        </Drawer.Screen>
        <Drawer.Screen name="Criar Lista">
          {() => <CreateList products={products} onSaveList={handleSaveList} />}
        </Drawer.Screen>
        <Drawer.Screen name="Lista de Compras">
          {() => <ShoppingList products={products} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
