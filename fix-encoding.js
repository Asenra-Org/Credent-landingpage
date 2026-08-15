const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  if (content.match(/GST Ã¢â€\sâ€  BANK/g) || content.match(/GST Ã¢â€ â€  BANK/g) || content.match(/GST Ã¢â€ â€  Bank/g)) {
    content = content.replace(/GST Ã¢â€\sâ€  BANK/g, 'GST ↔ BANK');
    content = content.replace(/GST Ã¢â€ â€  BANK/g, 'GST ↔ BANK');
    content = content.replace(/GST Ã¢â€ â€  Bank/g, 'GST ↔ Bank');
    changed = true;
  }
  if (content.match(/â€™/g)) {
    content = content.replace(/â€™/g, "'");
    changed = true;
  }
  if (content.match(/â€”/g)) {
    content = content.replace(/â€”/g, "—");
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed encoding in', file);
  }
});
