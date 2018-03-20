const fs = require('fs');

module.exports = app => {
  // Require all files in api directory
  fs.readdirSync('./routes/api').forEach(file => require(`./api/${file}`)(app));
};
