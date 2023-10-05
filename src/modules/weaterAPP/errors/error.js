export const Errors = {
    APIConectionError: Symbol("api_conection_error"),
    APIInvalidData: Symbol("invalid_data")
}

export class APIConectionError extends Error {
    constructor(message) {
      super(message);
      this.name = 'API connection error';
      this.message = "An error occurred while trying to communicate with the API";
      this.errorCode = Errors.APIConectionError;
    }
}

export class APIinvalidDataError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Invalid API data';
      this.message = "data obtained from API is not valid";
      this.errorCode = Errors.APIInvalidData;
    }
}