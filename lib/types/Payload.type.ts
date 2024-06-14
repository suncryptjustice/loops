import { RequireOnlyOne } from './shared.type';

export type Transactional = {
  transactionalId: string;
  [key: string]: string | number | boolean;
};

export type T = keyof Transactional;

export type Properties<EventType extends T> = Transactional[EventType];

export type ContactQueryFields = {
  email: string;
  userId: string;
};

export type ContactProperties = {
  firstName?: string;
  lastName?: string;
  source?: string;
  userGroup?: string;
  subscribed?: boolean;
};

export type SendEventPayload = RequireOnlyOne<
  ContactQueryFields,
  'email' | 'userId'
> & { eventName: string } & ContactProperties;

export type SendTransactionalPayload<V extends Transactional> = {
  email: string;
  transactionalId: V['transactionalId'];
  dataVariables: Omit<V, 'transactionalId'>;
};

export type CreateContactPayload = {
  email: string;
} & ContactProperties;

export type UpdateContactPayload = {
  email: string;
} & ContactProperties;

export type FindContactPayload = RequireOnlyOne<
  ContactQueryFields,
  'email' | 'userId'
>;

export type DeleteContactPayload = RequireOnlyOne<
  ContactQueryFields,
  'email' | 'userId'
>;
