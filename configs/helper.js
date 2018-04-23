// Helper functions
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const root = (args) => {
  return path.join(ROOT, 'src', args);
}
const rootDir = (args) => {
  return path.join(ROOT, 'src/components', args);
}
const rootNode = (args) => {
  return path.join(ROOT, args);
}

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  root,
  rootDir,
  rootNode,
  resolve
}