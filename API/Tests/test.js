const { listUser } = require('../Logics/logic')
const assert = require('assert');

describe('API demo response', () => {
  let response;

  // This will be called once before any 'it'
  before(async () => {
    response = await listUser(1, 10);
  });

  it('status should be 200', () => {
    assert(response.status == 200, 'status is not 200');
  });

  it('status text should be OK', () => {
    assert(response.statusText === 'OK', 'status text is not equal to OK')
  });
  //just adding some random change

});