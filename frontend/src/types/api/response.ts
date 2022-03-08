export interface SuccessResponse {
  success: boolean;
}

export interface ErrorResponse {
  success: boolean;
  errorCode: string;
  message: string;
}
