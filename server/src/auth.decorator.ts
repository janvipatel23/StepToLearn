/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { SetMetadata } from '@nestjs/common';

export const Auth = (role: string[]) => SetMetadata('auth', role);
