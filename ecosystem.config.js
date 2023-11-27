module.exports = {
  apps : [{
    name: 'Redirector',
    script: 'authbind --deep node server.js',
    args: '',
    exec_mode: 'fork',
    instances: 1
  }]
};
