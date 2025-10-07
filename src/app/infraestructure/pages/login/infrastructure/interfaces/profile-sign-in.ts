import { FormControl } from '@angular/forms';

export default interface IProfileSignIn {
      username: FormControl<string | null>;
      password: FormControl<string | null>;
}
