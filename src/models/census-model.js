import Bookshelf from '../db';

class BaseModel extends Bookshelf.Model {
  constructor(...args) {
    super(...args);
  }

  orderBy(column, order) {
    return this.query((qb) => {
      qb.orderBy(column, order);
    });
  }

  groupBy(column) {
    return this.query((qb) => {
      qb.groupBy(column);
    });
  }
}

export class CensusModel extends BaseModel {
  constructor(...args) {
    super(...args);
  }

  get tableName() {
    return 'census_learn_sql';
  }
}
