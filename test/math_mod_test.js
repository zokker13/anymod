const should = require('should');

const mod = require('..');

describe('Rounding#math_mod()', () => {

  it('should modulo positive numbers and positive operands successfully', () => {

    should.equal(mod(17, 4), 1, '17 % 4');
    should.equal(mod(17, 5), 2, '17 % 5');
    should.equal(mod(17, 17), 0, '17 % 17');
    should.equal(mod(17, 42), 17, '17 % 42');
  });

  it('should modulo posive numbers and negative operands successfully', () => {

    should.equal(mod(17, -4), -3, '17 % -4');
    should.equal(mod(17, -5), -3, '17 % -5');
    should.equal(mod(17, -17), 0, '17 % -17');
    should.equal(mod(17, -42), -25, '17 % -42');
  });

  it('should modulo negative numbers and positive operands successfully', () => {

    should.equal(mod(-17, 4), 3, '-17 % 4');
    should.equal(mod(-17, 5), 3, '-17 % 5');
    should.equal(mod(-17, 17), 0, '-17 % 17');
    should.equal(mod(-17, 42), 25, '-17 % 42');
  });

  it('should modulo negative numbers and negative operands successfully', () => {

    should.equal(mod(-17, -4), -1, '-17 % -4');
    should.equal(mod(-17, -5), -2, '-17 % -5');
    should.equal(mod(-17, -17), 0, '-17 % -17');
    should.equal(mod(-17, -42), -17, '-17 % -42');
  });

  it('should fail with 0 as operand', () => {

    should(mod(42, 0)).undefined();
  });
});
