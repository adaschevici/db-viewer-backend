import { Router } from 'express';
import { CensusModel } from '../models/census-model';

class ModelMetaController {

  static create(api = Router()) {
    const router = new ModelMetaController();

    api.get('/column-names', (req, res) => router.getColumnNames(req, res));

    return api;
  }

  getColumnNames(req, res) {
    new CensusModel().fetch()
      .then((model) => {
        const fields = Object.keys(model.attributes);
        res.json({ fields });
      })
      .catch((error) => res.json({ error }));
  }
}

export default ModelMetaController;

