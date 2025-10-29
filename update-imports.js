const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components', 'ui');

// Patterns to match and replace
const patterns = [
  // Match @radix-ui packages with version numbers
  { 
    regex: /from "@radix-ui\/([^@"]+)@[\d.]+/g, 
    replacement: 'from "@radix-ui/$1' 
  },
  // Match lucide-react with version
  { 
    regex: /from "lucide-react@[\d.]+/g, 
    replacement: 'from "lucide-react' 
  },
  // Match class-variance-authority with version
  { 
    regex: /from "class-variance-authority@[\d.]+/g, 
    replacement: 'from "class-variance-authority' 
  },
  // Match other potential versioned imports
  { 
    regex: /from "([^@"]+)@[\d.]+/g, 
    replacement: 'from "$1' 
  }
];

// Process all .tsx files in the components directory
fs.readdir(componentsDir, (err, files) => {
  if (err) {
    console.error('Error reading components directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      const filePath = path.join(componentsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = false;

      patterns.forEach(({ regex, replacement }) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          updated = true;
        }
      });

      if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated imports in ${file}`);
      }
    }
  });

  console.log('Import updates complete!');
});
