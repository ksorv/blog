import Redis from 'ioredis';

const isProd = process.env.NODE_ENV === 'production';

export const redis = new Redis(isProd ? process.env.REDIS : '');
