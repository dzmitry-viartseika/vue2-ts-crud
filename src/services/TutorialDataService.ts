import axios from 'axios';
import { CURRENT_SERVER } from '../constants/domain';

class TutorialDataService {
  getAll() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get('/tutorials');
  }

  get(id: string) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get(`/tutorials/${id}`);
  }

  create(data: any) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.post('/tutorials', data);
  }

  update(id: string, data: any) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.put(`/tutorials/${id}`, data);
  }

  delete(id: string) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.delete('/tutorials');
  }

  findByTitle(title: string) {
    const instCred = axios.create({
      baseURL: CURRENT_SERVER,
    });
    return instCred.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
