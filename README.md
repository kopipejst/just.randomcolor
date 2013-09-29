#just.RandomColor#

[![Build Status](https://travis-ci.org/kopipejst/just.randomcolor.png)](https://travis-ci.org/kopipejst/just.randomcolor)


JavaScript random color generator

##Installation##

###Node.js###

**npm package**

	npm install just.randomcolor


**use in node.js**

	var RandomColor = require('just.randomcolor');

###Browser###

- download just.RandomColor.js from [GitHub](https://github.com/kopipejst/just.randomcolor)
- include on your page: `<script src="just.RandomColor.js"></script>`


##Usage##

####generate random color

**node.js**

***for one color***
	var color = new RandomColor(options);

***for array of colors***
	var colors = new RandomColor(options, length);

**browser**

	var color = new just.RandomColor(options);
	var colors = new just.RandomColor(options, length);
	
####Arguments####

***options***
Options are optionaly max and min values for each of rbga components. Example:

	var options = {
		r: [50, 60], 
		g: [100,200],
		a: [0.3, 0.7]
	},
	
	color = new RandomColor(options);

***length***
length of array of colors (default 1)

####get color

	***for one color***
	color.value; // {r: 56, g: 195, b: 227, a: 0.6}

	***for array of colors***
	colors.colors; // each element in array have `value` property

###functions###

 **toHex**
 
 Converts color value to hexadecimal presentation
 
 	color.toHex().value; // "38c3e3"
 	colors.toHex().colors; // each element in array have `value` property
 
 **toRGB**
 
 Converting to RGB format
 
 	color.toRGB().value; // {r: 56, g: 195, b: 227}
 	colors.toRGB().colors; // each element in array have `value` property

 **toRGBA**
 
 Converting to RGBA format
 
 	color.toRGBA().value; // {r: 56, g: 195, b: 227, a: 0.6}
 	colors.toRGBA().colors; // each element in array have `value` property
 	
 **toCSS**
 	
 Return CSS color string
 
 	color.toHex().toCSS(); // "#38c3e3"
 	color.toRBG().toCSS(); // "rgb(56,195,227)"
 	color.toRGBA().toCSS(); // "rgba(56,195,227,0.6)"

 	colors.toHex().toCSS; // [ '#bc98c8', '#3ab85f', '#321da0', '#251c2f', '#c44d5a' ]
 	colors.toRBG().toCSS(); // [ 'rgb(131,174,178)', 'rgb(218,8,251)','rgb(93,224,26)']

 **refresh**
 
 Re-generate color value
 
 	color.refresh().value; // {r: 60, g: 175, b: 178, a: 0.6}
 	colors.refresh().colors; // each element in array have `value` property
 
 	
 