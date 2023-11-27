module.exports = {
  apps : [{
    name: 'myapp',
    script: 'authbind --deep node server.js',
    args: '',
    exec_mode: 'fork',
    instances: 1
  }]
};
