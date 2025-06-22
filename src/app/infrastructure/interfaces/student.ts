import { Enrollment } from './registrarMatricula/nextEnrollment';

export interface Student {
      dni: string;
      name: string;
      surnamePaternal: string;
      surnameMaternal: string;
      phoneNumber: string;
      accessEnabled: boolean;
      username: string;
      password: string;
      description: string;
      grade: string;
      nextEnrollment: Enrollment;
}
