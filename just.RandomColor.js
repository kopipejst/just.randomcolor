/**
 * just namespace
 * @type {[type]}
 * @author Ivan Lazarevic (workshop.rs)
 */
var just = just || {};

just.RandomColor = (function() {

    /**
     * RandomColor constructor
     * Wrapper around Color
     * In case that length is 1 Color will be return
     * if length is larger than 1 array of Color will be return
     *
     * @param {object} options same options as for Color
     * @param {integer} length array length
     */
    var RandomColor = function(options, length) {
        this.colors = [];
        if (typeof length === 'undefined') {
            length = 1;
        }

        if (length === 1) {
            return new Color(options);
        }

        for (var i = 0; i < length; i++) {
            var rc = new Color(options);
            this.colors.push(rc);
        }
    };

    /**
     * Convert all colors to RGB
     * @return {[type]} [description]
     */
    RandomColor.prototype.toRGB = function() {
        for (var i = 0; i < this.colors.length; i++) {
            this.colors[i].toRGB();
        }
        return this;
    };

    /**
     * Convert all colors to RGBA
     * @return {[type]} [description]
     */
    RandomColor.prototype.toRGBA = function() {
        for (var i = 0; i < this.colors.length; i++) {
            this.colors[i].toRGBA();
        }
        return this;
    };

    /**
     * Convert all colors to Hex
     * @return {[type]} [description]
     */
    RandomColor.prototype.toHex = function() {
        for (var i = 0; i < this.colors.length; i++) {
            this.colors[i].toHex();
        }
        return this;
    };

    /**
     * Convert all colors to CSS
     * @return {[type]} [description]
     */
    RandomColor.prototype.toCSS = function() {
        for (var i = 0; i < this.colors.length; i++) {
            this.colors[i].toCSS();
        }
        return this.colors;
    };

    /**
     * Refresh all colors in array
     * @return {[type]} [description]
     */
    RandomColor.prototype.refresh = function() {
        for (var i = 0; i < this.colors.length; i++) {
            this.colors[i].refresh();
        }
        return this;
    };


    /**
     * color constructor
     * @param {object} options
     * options are optionaly max and min values for each of rbga components
     * example:
     * var color = new color({ r: [50, 60], g: [100,200], a: [0.3, 0.7]});
     * console.log(color.value) returns eg. Object {r: 57, g: 126, b: 246, a: 0.6}
     *
     * public methods:
     * toHex(), toRGB(), toRGBA(), toCSS(), refresh()
     * methods are chainable
     */
    var Color = function(options) {

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
    Color.prototype.refresh = function() {
        var randomNumber = function(min, max) {
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
    Color.prototype.toHex = function() {
        this.type = 'hex';
        this.value = ((1 << 24) + (this.color.r << 16) + (this.color.g << 8) + this.color.b).toString(16).slice(1);
        return this;
    };

    /**
     * RGB format
     * @return {[type]} [description]
     */
    Color.prototype.toRGB = function() {
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
    Color.prototype.toRGBA = function() {
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
    Color.prototype.toCSS = function() {
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

    return RandomColor;
})();


if (typeof module !== 'undefined' && module.exports) {
    module.exports = just.RandomColor;
}
