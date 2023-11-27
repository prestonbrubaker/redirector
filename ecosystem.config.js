module.exports = {
  apps : [{
    name: 'myapp',
    script: 'server.js',
    interpreter: '/usr/bin/authbind',
    args: '--deep node server.js'
  }]
};
