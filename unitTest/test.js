var assert = require('assert');
var app = require('../server/server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

describe('Server test', function() {
    // The function passed to before() is called before running the test cases.
    before(function() {
        console.log("before test");
    });

    // The function passed to after() is called after running the test cases.
    after(function() {
        console.log("after test");
    });

    describe('/productfind', () => {
        it('it should GET all the products', (done) => {
            chai.request(app)
                .get('/productFind')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    // res.body.length.should.be.eql(2);
                    done();
                });
        });
    });



});