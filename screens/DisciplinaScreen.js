import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getDisciplinaById } from '../services/api';

const DisciplinaScreen = ({ route }) => {
  const { id } = route.params;
  const [disciplina, setDisciplina] = useState(null);

  useEffect(() => {
    const fetchDisciplina = async () => {
      const data = await getDisciplinaById(id);
      setDisciplina(data);
    };

    fetchDisciplina();
  }, [id]);

  if (!disciplina) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View>
      <Text>Nome: {disciplina.nome}</Text>
      <Text>Carga Horária: {disciplina.cargaHoraria}</Text>
      <Text>Responsável: {disciplina.responsavel.nome}</Text>
    </View>
  );
};

export default DisciplinaScreen;