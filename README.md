=== generate random color and converts to desired format ===

 var color = new just.RandomColor({ r: [50, 60], g: [100,200], a: [0.3, 0.7]});
 color.value // eg. Object {r: 57, g: 126, b: 246, a: 0.6} 
 color.toHex().value // eg. "3c7dc6"
 color.toRGB().toCSS() // "rgb(60,125,198)"