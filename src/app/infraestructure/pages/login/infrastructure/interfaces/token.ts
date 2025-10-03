import { TRolUsers } from '../../../../../core/types/TRolUsers';

export default interface Token {
      accessToken: string;
      refreshToken: string;
      expiresIn: string;
      tokenType: string;
      rol: TRolUsers;
}
