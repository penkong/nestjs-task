import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (data, req): User => {
    return req.user;
  },
);
// use this instead of @Req() req as param == @GetUser() user:User
