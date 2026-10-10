module.exports = {
  apps: [
    {
      name: 'pookie-md',
      script: 'index.js',
      cwd: __dirname,
      watch: false,
      autorestart: true,
      max_restarts: 20,
      restart_delay: 5000,
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
