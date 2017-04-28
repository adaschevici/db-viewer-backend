import config from './config.json';
import knex from 'knex';
import bookshelf from 'bookshelf';

 //const dbConfig = {
 //  client: 'sqlite',
 //  connection: {
 //    filename: '../us-census.db'
 //  },
 //  useNullAsDefault: true
 //};

const Bookshelf = bookshelf(knex(config.dbConfig));

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');

export default Bookshelf;
