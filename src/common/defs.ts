
export interface IDictionary {
  [index: string]: any;
}

export interface IUser {
  email: string,
  name: string,
  dateOfBirth: string,
  phoneNumber: string,
  address: {
    street: string,
    city: string,
    state: string,
    zipCode: string
    country: string
}
}

export function wrapAsync(fn: any) {
  return function (req: any, res: any, next: any) {
    return Promise.resolve(fn(req, res, next)).catch(next);
  };
}