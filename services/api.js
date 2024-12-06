import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getDisciplinas = async () => {
  try {
    const response = await api.get('/disciplinas');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createDisciplina = async (disciplina) => {
  try {
    const response = await api.post('/disciplinas', disciplina);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
