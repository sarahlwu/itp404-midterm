let chai = require('chai');
let expect = chai.expect;
let filteredUsers = require('./../question-2');

describe('question-2', function() {
  it('should filter the list of users to those in CA', function() {
    expect(filteredUsers).to.eql([
      {
        name: 'David',
        address: {
          state: 'CA'
        }
      },
      {
        name: 'Nevil',
        address: {
          state: 'CA'
        }
      }
    ]);
  });
});
