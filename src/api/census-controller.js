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
      qb.avg('age'); // avg by field ?
      qb.count();
    }).fetchAll()
      .then((census) => {
        const formattedCensusData = census.map((obj) => {
          const formatted = {
            average: obj.attributes['avg("age")'],
            count: obj.attributes['count(*)']
          };
          formatted[field] = obj.attributes[field];
          return formatted;
        });
        res.json({ census: formattedCensusData });
      });
  }
}

export default CensusController;
