let cond_1 = require('../src/js/cond_1');
let loop_2 = require('../src/js/loop_2');
let array_1 = require('../src/js/array_1');
let func_1 = require('../src/js/func_1');
let assert = require('assert');
let chai = require('chai');

describe('Calculator test', function () {
    describe('Conditions', function () {
        it('should return 5', function () {
            let arr = [3, 2];
            assert.equal(cond_1(arr), 5);
        });
        it('should return 8', function () {
            let arr = [4, 2];
            assert.equal(cond_1(arr), 8);
        });
    });
    describe('Loop', function () {
        it('should return Число 7 простое', function () {
            let num = 7;
            assert.equal(loop_2(num), 'Число 7 простое');
        });
        it('should return Число 12 сложное', function () {
            let num = 12;
            assert.equal(loop_2(num), 'Число 12 сложное');
        });
    });
    describe('Array', function () {
        it('should return 1', function () {
            let array = '2 5 3 9 1';
            assert.equal(array_1(array), '1');
        });
        it('should return 3', function () {
            let array = '3 15 9 17 7';
            assert.equal(array_1(array), '3');
        });
    });
    describe('Function', function () {
        it('should return Среда', function () {
            assert.equal(func_1(3), 'Среда');
        });
        it('should return Суббота', function () {
            assert.equal(func_1(6), 'Суббота');
        });
    });

});

