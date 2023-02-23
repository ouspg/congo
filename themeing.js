const colors = require('tailwindcss/colors')

function toRgb (hex) {
  if (hex.length === 4) {
    hex = '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }
  const red = parseInt(hex[1] + hex[2], 16)
  const green = parseInt(hex[3] + hex[4], 16)
  const blue = parseInt(hex[5] + hex[6], 16)
  return `${red}, ${green}, ${blue}`
}

function tailwindColorToRgb (name) {
  const parts = name.split('-')
  let current = colors
  parts.forEach(part => {
    current = current[part]
  })
  if (current) {
    return toRgb(current)
  }
}

const ouspg_primary = {
  50: '#fff4ee',
  100: '#e7e5e4',
  // 100: '#ffe7da',
  200: '#ffd2bb',
  300: '#1c1917',
  // 400: '#ff8749',
  // 400: '#9A3412', // dark links (a)
  400: '#a26d6d', // dark links (a), icon colors always
  500: '#9A3412',
  600: '#1c1917',
  // 700: '#53281b', // light links (a), dark buttons, box backgrounds
  700: '#2f1410', // light links (a), dark buttons, box backgrounds
  800: '#3f1410',
  900: '#7c2d12'
} // #a26d6d
var neutral_cols = structuredClone(colors.gray);
// neutral hover color
// neutral-600 dark text-decoration-color
neutral_cols[800] = "#151515" // neutral-800 background color in dark mode
// console.log(neutral_cols)

neutral = "--color-neutral-"
primary = "--color-primary-"
secondary = "--color-secondary-"

var fs = require('fs')
var logger = fs.createWriteStream('../../assets/css/schemes/ouspg.css', {
  flags: 'w+' 
})

logger.write(":root {\n");
logger.write("   --color-neutral: 255, 255, 255;\n");

   for (const [key, value] of Object.entries(neutral_cols)) {
  logger.write(`   ${neutral}${key}: ${toRgb(value)};\n`);
}
for (const [key, value] of Object.entries(ouspg_primary)) {
  logger.write(`   ${primary}${key}: ${toRgb(value)};\n`);
}
for (const [key, value] of Object.entries(colors.neutral)) {
  logger.write(`   ${secondary}${key}: ${toRgb(value)};\n`);
}

logger.write("}\n");
logger.write("/* See themes/congo/themeing.js how to generate */");
logger.end() 

