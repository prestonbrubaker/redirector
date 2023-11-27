module.exports = {
  apps: [{
    name: 'Redirector',
    script: 'server.js',
    interpreter: 'authbind',
    args: '--deep node'
  }]
};
