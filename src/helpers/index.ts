import crypto from 'crypto';

import * as dotenv from 'dotenv';

dotenv.config();

export const authentication = (salt: string, password: string): string => {
  return crypto
    .createHmac('sha256', [salt, password].join('/'))
    .update(process.env.SECRET || 'RACYN-REST-API')
    .digest('hex');
};

export const random = () => crypto.randomBytes(128).toString('base64');
