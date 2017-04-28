import { version } from '../../package.json';
import { Router } from 'express';
import CensusController from './census-controller';

export default () => {
	let api = Router();


  // mount view-db controller
  api.use('/census-view', CensusController.create());

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
