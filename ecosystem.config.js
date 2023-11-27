module.exports = {
  apps : [{
    name: 'Redirector',
    script: 'server.js',
    interpreter: '/usr/bin/authbind',
    args: '--deep node server.js'
  }]
};
