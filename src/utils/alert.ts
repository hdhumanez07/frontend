import toast from "react-hot-toast";

import { ERROR_HANDLE } from "./constants/error.handle";
import { SUCCESS_HANDLE } from "./constants/success.handle";

const {
  USER_ALREADY_EXISTS,
  POKEMON_ALREADY_EXISTS,
  INVALID_PAYLOAD,
  INTERNAL_SERVER_ERROR,
  USER_NOT_FOUND,
  INCORRECT_PASSWORD,
  INVALID_TOKEN,
} = ERROR_HANDLE;

const { OK } = SUCCESS_HANDLE;

const doAlert = (key: string, success: boolean) => {
  if (success) {
    switch (key) {
      case OK.KEY:
        return toast.success(OK.MESSAGE);
      default:
        return toast.success(OK.MESSAGE);
    }
  }

  switch (key) {
    case USER_ALREADY_EXISTS.KEY:
      return toast.error(USER_ALREADY_EXISTS.MESSAGE);
    case POKEMON_ALREADY_EXISTS.KEY:
      return toast.error(POKEMON_ALREADY_EXISTS.MESSAGE);
    case INVALID_PAYLOAD.KEY:
      return toast.error(INVALID_PAYLOAD.MESSAGE);
    case USER_NOT_FOUND.KEY:
      return toast.error(USER_NOT_FOUND.MESSAGE);
    case INCORRECT_PASSWORD.KEY:
      return toast.error(INCORRECT_PASSWORD.MESSAGE);
    case INVALID_TOKEN.KEY:
      return toast.error(INVALID_TOKEN.MESSAGE);
    default:
      return toast.error(INTERNAL_SERVER_ERROR.MESSAGE);
  }
};

export { doAlert };
