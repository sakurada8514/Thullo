export interface SuccessResponse {
  data: {
    email: string;
    id: number;
    name: string;
    provider: string;
    uid: string;
  };
}

export interface ErrorResponse {
  success: boolean;
  errorCode: string;
  message: string;
}
