/**
 * just namespace
 * @type {[type]}
 */
var just = just || {};

/**
 * RandomColor constructor
 * @param {object} options
 * options are optionaly max and min values for each of rbga components
 * example:
 * var color = new just.RandomColor({ r: [50, 60], g: [100,200], a: [0.3, 0.7]});
 * console.log(color.value) returns eg. Object {r: 57, g: 126, b: 246, a: 0.6} 
 *
 * public methods:
 * toHex(), toRGB(), toRGBA(), toCSS(), refresh()
 * methods are chainable
 */
just.RandomColor = function (options) {

    /**
     * default values
     * @type {Object}
     */
    var defaults = {
        r: [0, 255],
        g: [0, 255],
        b: [0, 255],
        a: [0.1, 1]
    };

    // merge default with user options
    for (var i in defaults) { 
        if (options && options[i]) {
            defaults[i] = options[i];
        }
    }

    this.options = defaults;

    this.refresh();

};

/**
 * Create random values for color
 * @return {[type]} [description]
 */
just.RandomColor.prototype.refresh = function () {
    var randomNumber = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        options = this.options,
        r = randomNumber(options.r[0], options.r[1]),
        g = randomNumber(options.g[0], options.g[1]),
        b = randomNumber(options.b[0], options.b[1]),
        a = randomNumber(options.a[0] * 10, options.a[1] * 10) / 10;
    this.color = {
        r: r,
        g: g,
        b: b,
        a: a
    };
    this.value = this.color;
    this.type = 'rgba';
    return this;
};

/**
 * Create hex presentation
 * @return {[type]} [description]
 */
just.RandomColor.prototype.toHex = function () {
    this.type = 'hex';
    this.value = ((1 << 24) + (this.color.r << 16) + (this.color.g << 8) + this.color.b).toString(16).slice(1);
    return this;
};

/**
 * RGB format
 * @return {[type]} [description]
 */
just.RandomColor.prototype.toRGB = function () {
    this.type = 'rgb';
    this.value = {
        r: this.color.r,
        g: this.color.g,
        b: this.color.b
    };
    return this;
};

/**
 * RGBA format
 * @return {[type]} [description]
 */
just.RandomColor.prototype.toRGBA = function () {
    this.type = 'rgba';
    this.value = {
        r: this.color.r,
        g: this.color.g,
        b: this.color.b,
        a: this.color.a
    };
    return this;
};

/**
 * Print color in CSS format
 * @return {string} [description]
 */
just.RandomColor.prototype.toCSS = function () {
    var c = this.color;
    if (this.type === 'rgb') {
        return 'rgb(' + c.r + ',' + c.g + ',' + c.b + ')';
    }
    if (this.type === 'hex') {
        return '#' + this.value;
    }
    if (this.type === 'rgba') {
        return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = just.RandomColor;
}
