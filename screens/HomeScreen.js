import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getDisciplinas } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      const data = await getDisciplinas();
      setDisciplinas(data);
    };

    fetchDisciplinas();
  }, []);

  return (
    <View>
      <Text>Disciplinas</Text>
      <FlatList
        data={disciplinas}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nome}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() => navigation.navigate('Disciplina', { id: item._id })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;