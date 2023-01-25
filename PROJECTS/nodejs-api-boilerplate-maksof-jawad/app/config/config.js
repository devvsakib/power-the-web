const config = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
    Url:'http://localhost:',
    PORT: process.env.PORT || 3000,
    dbConfig : {
      host: 'localhost',
      database : 'nodejs_api',
      username: 'root',
      password: '',
      dialect: 'mysql',
      logging:false
    },
  }
  
  module.exports = config;