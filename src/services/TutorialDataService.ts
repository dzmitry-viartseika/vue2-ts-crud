import axios from 'axios';
import { CURRENT_SERVER } from '../constants/domain';

class TutorialDataService {
  getAll() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get('/crud-ts-vue2-default-rtdb.json');
  }

  get(id: string) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get(`/crud-ts-vue2-default-rtdb.json/${id}`);
  }

  create(data: any) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.post('/crud-ts-vue2-default-rtdb.json', data);
  }

  update(id: string, data: any) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.put(`/crud-ts-vue2-default-rtdb.json/${id}`, data);
  }

  delete(id: string) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.delete(`/crud-ts-vue2-default-rtdb.json/${id}`);
  }

  deleteAll() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.delete('/crud-ts-vue2-default-rtdb.json');
  }

  findByTitle(title: string) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get(`/crud-ts-vue2-default-rtdb.json?title=${title}`);
  }
}

export default new TutorialDataService();
