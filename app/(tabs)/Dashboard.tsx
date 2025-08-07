// Dashboard.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Product {
  name: string;
  quantity: number;
}

interface DashboardProps {
  products: Product[];
}

const Dashboard: React.FC<DashboardProps> = ({ products }) => {
  const countProducts = () => {
    const counts: Record<string, number> = {};
    products.forEach(product => {
      counts[product.name] = (counts[product.name] || 0) + product.quantity;
    });
    return counts;
  };

  const productCounts = countProducts();

  // Ordena os produtos do maior para o menor
  const sortedProducts = Object.entries(productCounts)
    .map(([name, quantity]) => ({ name, quantity }))
    .sort((a, b) => b.quantity - a.quantity) // Ordena pela quantidade
    .slice(0, 5); // Limita a 5 produtos

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos Mais Comprados</Text>
      <FlatList
        data={sortedProducts}
        renderItem={({ item, index }) => (
          <View style={[styles.item, index === 0 && styles.highlight]}>
            <Text style={[styles.itemText, index === 0 && styles.highlightText]}>
              {item.name}: {item.quantity}
            </Text>
          </View>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  highlight: {
    backgroundColor: '#0000FF', // Cor de fundo azul
    borderRadius: 5,
    marginBottom: 10, // Espaçamento inferior para o destaque
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold', // Negrito para destacar o texto
  },
  highlightText: {
    color: '#FFFFFF', // Texto branco para o destaque
  },
});

export default Dashboard;
