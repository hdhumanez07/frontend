export interface IUser {
  email: string;
  fullName: string;
  phone: number;
  address: string;
  birthday: Date;
  city: string;
  department: string;
}

export interface IUserContext {
  auth: {
    user: {
      _id: string;
      email: string;
      fullName: string;
      address: string;
      phone: number;
      birthday: Date;
      city: {
        _id: string;
        name: string;
        department: string;
      };
      department: {
        _id: string;
        name: string;
      };
      createdAt: Date;
      updatedAt: Date;
    };
    token: string;
  };
  setAuth: (auth: IUserContext["auth"]) => void;
}
