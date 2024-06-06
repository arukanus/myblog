const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

// Path to the JSON file
const dataPath = path.join(__dirname, '../public/data/data.json');

// Read the JSON file
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Generate slugs and update the JSON data
const updatedData = data.map(post => ({
  ...post,
  slug: slugify(post.title, { lower: true })
}));

// Write the updated data back to the JSON file
fs.writeFileSync(dataPath, JSON.stringify(updatedData, null, 2));

console.log('Slugs have been generated and added to data.json');

