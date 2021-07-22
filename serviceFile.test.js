const serviceFile = require('./serviceFile');
test('get the list at least one item', () => {
  expect(serviceFile).toBeDefined();
});
test('Read test file ', () => {
  expect(serviceFile.readInputDocument.length).toBeDefined;
});
test('Read censored file ', () => {
  expect(serviceFile.readCensoredKey.length).toBeDefined;
});