import * as bcrypt from 'bcrypt';

export class Password {
  readonly value : string;

  constructor(value: string) {
    this.value =  this.hashPassword(value);
  }

  private hashPassword(myPlaintextPassword: string) {
      const hash = bcrypt.hashSync(myPlaintextPassword, 10);
      return hash;
}
}
