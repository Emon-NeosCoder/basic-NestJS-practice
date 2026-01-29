import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  register() {
    // Logic for user registration

    /*  
    1. Check if email already exists
    2. Hash the password
    3. Store the user into the Database
    4. Generate JWT Token
    5. Send token in response
     */

    return this.userService.createUser();
  }
}
