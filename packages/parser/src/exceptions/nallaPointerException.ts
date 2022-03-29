export default class zeroPointerException extends Error {
  constructor(errorMessage: string) {
    const errorName = "zeroPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
