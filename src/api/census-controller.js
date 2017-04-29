import { Router } from 'express';
import { CensusModel } from '../models/census-model';

class CensusController {

  static create(api = Router()) {
    const router = new CensusController();

    api.get('/:metric', (req, res) => router.getCensusFieldData(req, res));

    return api;
  }

  getCensusFieldData(req, res) {
    const field = req.params.metric;
    CensusModel.query((qb) => {
      qb.select(field.toString());
      qb.groupBy(field.toString());
      qb.avg('age');
      qb.count();
    }).fetchAll()
      .then((census) => {
        res.json({ census });
      });
  }
}

export default CensusController;
