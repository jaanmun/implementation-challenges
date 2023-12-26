import axios from 'axios';

// Mock data 활용하기 위한 임의의 무료 API 데이터 호출
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getTodoPage = async (todoParam = 1, options = {}) => {
  const response = await api.get(`/todos?_page=${todoParam}`, options);
  return response.data;
};
