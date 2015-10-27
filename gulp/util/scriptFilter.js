import path from 'path';

// Filters out non .js files
export default function (name) {
  return /(\.(js)$)/i.test(path.extname(name));
};
