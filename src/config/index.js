import dotenv from 'dotenv'
dotenv.config()

const { env } = process

export const generalConfig = {
  serviceName: env.SERVICE_NAME || 'pizza-backend',
  nodeEnv: env.NODE_ENV
}

export const serverConfig = {
  servicePort: env.PORT || 8080,
}

export const authConfig = {
  jwtSecret: env.JWT_SECRET || 'very-secret',
}

export const postgresConfig = {
  database: env.DB_PG_DATABASE || 'pizza',
  user: env.DB_PG_USERNAME || 'adi.mizrahi',
  password: env.DB_PG_PASSWORD || 'admin',
  host: env.DB_PG_HOST || 'localhost',
  port: 5432,
  appName: generalConfig.serviceName,
}
