const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('GitHub Users API Tests', () => {
  const baseURL = 'https://api.github.com';

  it('should fetch the users data successfully', (done) => {
    chai.request(baseURL)
      .get('/users')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return a 404 for an invalid endpoint', (done) => {
    chai.request(baseURL)
      .get('/invalid-endpoint')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
