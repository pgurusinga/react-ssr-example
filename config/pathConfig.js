const path = require('path');
const PUBLIC_DIRECTORY_NAME = 'public';

const BASE_PATH = path.join(__dirname, '../');
const PUBLIC_PATH = path.join(BASE_PATH, PUBLIC_DIRECTORY_NAME);

module.exports = {
  BASE_PATH,
  PUBLIC_PATH
};
