/*global require*/
var mocha = require('mocha');
var expect = require('chai').expect;

describe("just.RandomColor", function () {
    var RandomColor = require('../just.RandomColor.js'),
        color = new RandomColor();

    it("basics", function () {
        expect(color).not.to.be.an('undefined');
        expect(color).to.be.an('object');
        expect(color.value).not.to.be.an('undefined');
    });

    it("converts", function () {
        expect(color.value).to.deep.equal(color.toRGBA().value);
        expect(color.toHex()).to.equal(color.toRGB().toHex());
        expect("#" + color.toHex().value).to.equal(color.toHex().toCSS());
        expect(color.toCSS()).to.be.a('string');
    });

    it("array", function () {
        var colors = new RandomColor(null, 5);
        expect(colors).not.to.be.an('undefined');
        expect(colors.colors).to.have.length(5);
        expect(colors.toRGB().toCSS()).to.have.length(5);
        expect(colors.toCSS()).to.be.a('array');
    });

});
