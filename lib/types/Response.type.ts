export type SendEventResponse = SendEvenSuccessResponse | SendEvenErrorResponse;

export type SendEvenSuccessResponse = {
  success: true;
};

export type SendEvenErrorResponse = {
  success: false;
  message: string;
};

export type SendTransactionalEmailResponse =
  | SendTransactionalEmailSuccessResponse
  | SendTransactionalEmailErrorResponse;

export type SendTransactionalEmailSuccessResponse = {
  success: true;
};

export type SendTransactionalEmailErrorResponse = {
  success: false;
  path: string;
  message: string;
};

export type CreateContactResponse =
  | CreateContactSuccessResponse
  | CreateContactErrorResponse;

export type CreateContactSuccessResponse = {
  success: true;
  id: string;
};

export type CreateContactErrorResponse = {
  success: false;
  message: string;
};

export type UpdateContactResponse =
  | UpdateContactSuccessResponse
  | UpdateContactErrorResponse;

export type UpdateContactSuccessResponse = {
  success: true;
  id: string;
};

export type UpdateContactErrorResponse = {
  success: false;
  message: string;
};

export type FindContactResponse =
  | FindContactSuccessResponse
  | FindContactErrorResponse;

export type FindContactSuccessResponse = Array<{
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  source?: string;
  subscribed: boolean;
  userGroup?: string;
  userId: null | string;
}>;

export type FindContactErrorResponse = [];

export type DeleteContactResponse =
  | DeleteContactSuccessResponse
  | DeleteContactErrorResponse;

export type DeleteContactSuccessResponse = {
  success: true;
  message: 'Contact deleted.';
};

export type DeleteContactErrorResponse = {
  success: false;
  message: string;
};
