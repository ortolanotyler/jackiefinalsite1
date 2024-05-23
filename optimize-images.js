const tinify = require('tinify');
tinify.key = 'MQJVtml0HHHpG72PrxPzLR5zjzynGjc0'; // Replace with your actual API key

const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'build', 'static', 'media');
const outputDir = path.join(__dirname, 'build', 'static', 'media');

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach((file) => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file);

    tinify.fromFile(inputFile).toFile(outputFile, (err) => {
      if (err) {
        console.error('Error optimizing image:', err);
      } else {
        console.log('Optimized:', file);
      }
    });
  });
});
