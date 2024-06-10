import { IUserContext } from "../interfaces/user.interface";

export const falseUser: IUserContext["auth"] = {
  user: {
    fullName: "Heyner Humanez",
    email: "hdhumanez@gmail.com",
    department: {
      _id: "621b010a99723eb26bf4adf7",
      name: "Córdoba",
    },
    address: "Calle 1 # 1-1",
    birthday: new Date("1995-01-01"),
    phone: 1234567890,
    city: {
      _id: "621b010a99723eb26bf4adf7",
      name: "Montería",
      department: "621b010a99723eb26bf4adf7",
    },
    _id: "621b010a99723eb26bf4adf7",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWIwMTBhOTk3MjNlYjI2YmY0YWRmNyIsImVtYWlsIjoiaGRodW1hbmV6QGdtYWlsLmNvbSIsImlhdCI6MTY0NjE0Nzk4MywiZXhwIjoxNjQ2MTUxNTgzfQ.7DoXAIwPBLgHLYd3QCHHHXaBgEzRZgv1D09pbv-q3y8",
};
