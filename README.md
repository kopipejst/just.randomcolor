#just.RandomColor#

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

	var color = new RandomColor();

**browser**

	var color = new just.RandomColor();
	
####options####

Options are optionaly max and min values for each of rbga components. Example:

	var options = {
		r: [50, 60], 
		g: [100,200],
		a: [0.3, 0.7]
	},
	
	color = new RandomColor(options);

####get color

	color.value; // {r: 56, g: 195, b: 227, a: 0.6}

###functions###

 **toHex**
 
 Converts color value to hexadecimal presentation
 
 	color.toHex().value; // "38c3e3"
 
 **toRGB**
 
 Converting to RGB format
 
 	color.toRGB().value; // {r: 56, g: 195, b: 227}
 	
 **toRGBA**
 
 Converting to RGBA format
 
 	color.toRGBA().value; // {r: 56, g: 195, b: 227, a: 0.6}
 	
 **toCSS**
 	
 Return CSS color string
 
 	color.toHex().toCSS(); // "#38c3e3"
 	color.toRBG().toCSS(); // "rgb(56,195,227)"
 	color.toRGBA().toCSS(); // "rgba(56,195,227,0.6)"
 
 **refresh**
 
 Re-generate color value
 
 	color.refresh().value; // {r: 60, g: 175, b: 178, a: 0.6}
 
 	
 