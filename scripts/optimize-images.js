const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Directories to process
const directories = [
  './src/assets',
  './src/assets/icons', 
  './src/assets/tools',
  './src/assets/toolslighttheme',
  './src/assets/tools2lighttheme'
];

// Image extensions to process
const extensions = ['png', 'jpg', 'jpeg', 'webp'];

// Process each directory
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} doesn't exist, skipping...`);
    return;
  }
  
  extensions.forEach(ext => {
    const files = glob.sync(`${dir}/**/*.${ext}`);
    
    files.forEach(file => {
      const outputFile = file.replace(`.${ext}`, `.optimized.${ext === 'jpg' || ext === 'jpeg' ? 'webp' : ext}`);
      
      // Skip already optimized files
      if (file.includes('.optimized.')) return;
      
      // Get image dimensions
      sharp(file)
        .metadata()
        .then(metadata => {
          // Don't process already small files (<50KB)
          fs.stat(file, (err, stats) => {
            if (err) {
              console.error(`Error reading file stats: ${file}`, err);
              return;
            }
            
            if (stats.size < 50 * 1024) {
              console.log(`Skipping ${file} - already small (${Math.round(stats.size / 1024)}KB)`);
              return;
            }
            
            let processor = sharp(file);
            
            // Resize if width > 1200px (preserve aspect ratio)
            if (metadata.width > 1200) {
              processor = processor.resize(1200);
            }
            
            // Convert to webp if jpg/jpeg
            if (ext === 'jpg' || ext === 'jpeg') {
              processor = processor.webp({ quality: 80 });
            } else if (ext === 'png') {
              processor = processor.png({ quality: 80, compressionLevel: 9 });
            }
            
            processor
              .toFile(outputFile)
              .then(() => {
                console.log(`✅ ${file} -> ${outputFile}`);
              })
              .catch(err => {
                console.error(`Error optimizing ${file}:`, err);
              });
          });
        })
        .catch(err => {
          console.error(`Error reading metadata for ${file}:`, err);
        });
    });
  });
});

console.log('Image optimization process started. Check console for results.');
