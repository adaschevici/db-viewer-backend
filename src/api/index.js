import { version } from '../../package.json';
import { Router } from 'express';
import CensusController from './census-controller';
import ModelMetaController from './get-model-meta';

export default () => {
	let api = Router();

  // mount the column meta route
  api.use('/model', ModelMetaController.create());

  // mount view-db controller
  api.use('/census-view', CensusController.create());

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
