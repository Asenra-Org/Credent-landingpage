const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'sections');
const files = fs.readdirSync(dir)
  .map(f => path.join(dir, f))
  .filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let updated = false;

  // Replace 'font-bold' with 'uppercase font-extrabold tracking-tight' in <h1> and <h2> tags
  // The regex looks for className strings in <h1 or <h2 tags
  content = content.replace(/(<h[12][^>]*className=[\"'])([^\"']*)([\"'])/g, (match, p1, p2, p3) => {
    if (!p2.includes('uppercase')) {
      let newClasses = p2.replace('font-bold', 'uppercase font-extrabold');
      updated = true;
      return p1 + newClasses + p3;
    }
    return match;
  });

  if (updated) {
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
});
