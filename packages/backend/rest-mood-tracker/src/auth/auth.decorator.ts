import { SetMetadata } from '@nestjs/common';

/**
 * Public key for Jwt-auth guard to use
 */
export const IS_PUBLIC_KEY = 'isPublic';

/**
 * Custom decorator that will open the API to public.
 * @constructor
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
