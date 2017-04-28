import { Router } from 'express';
import { CensusModel } from '../models/census-model';

class CensusController {

  static create(api = Router()) {
    const router = new CensusController();

    api.get('/', (req, res) => router.getCensusEducationData(req, res));

    return api;
  }

  getCensusEducationData(req, res) {
    console.log('Calling get');
    CensusModel.query((qb) => {
      qb.select('education');
      qb.groupBy('education');
      qb.avg('age');
      qb.count();
    }).fetchAll()
      .then((education) => {
        res.json({ education });
      });
  }
}

export default CensusController;
