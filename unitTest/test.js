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

    describe('/productadd', () => {
        it('it should indert a doc', (done) => {
            chai.request(app).post('/productadd').type('form').send({ 'Name': 'Kiwi', 'Price': 3 , 'units': 4, 'Description' : "nlne"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('Name');
                    res.body.should.have.property('Price');
                    res.body.should.have.property('units');
                    res.body.should.have.property('Description');
                    done();
                });
        });
    });

    describe('/productremove', () => {
        it('it should remove a doc', (done) => {
            chai.request(app).post('/productremove').type('form').send({ 'Name': 'Kiwi', 'Price': 3 , 'units': 4, 'Description' : "nlne"})
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/productupdate', () => {
        it('it should update a doc', (done) => {
            chai.request(app).post('/productremove').type('form').send([{ 'Name': 'Kiwi', 'Price': 3 , 'units': 4, 'Description' : "nlne"},{ 'Name': 'Kiwi2', 'Price': 3.5 , 'units': 40, 'Description' : "new"}])
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

});