import { Inject } from '@nestjs/common';
import {
  LOOPS_CLIENT_MODULE_OPTIONS,
  LOOPS_URL,
} from './loops-client.constants';
import { LoopsClientModuleOptions } from './loops-client.types';
import fetch from 'node-fetch';
import {
  CreateContactPayload,
  DeleteContactPayload,
  FindContactPayload,
  SendEventPayload,
  SendTransactionalPayload,
  Transactional,
  UpdateContactPayload,
} from './types/Payload.type';
import {
  CreateContactResponse,
  DeleteContactResponse,
  FindContactResponse,
  SendEventResponse,
  UpdateContactResponse,
} from './types/Response.type';

export class LoopsClientService {
  private readonly apiKey: string = '';

  constructor(
    @Inject(LOOPS_CLIENT_MODULE_OPTIONS)
    private readonly options: LoopsClientModuleOptions,
  ) {
    this.apiKey = this.options.apiKey;
  }

  async sendTransactional<T extends Transactional>(
    args: SendTransactionalPayload<T>,
  ): Promise<SendEventResponse> {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    };

    const res = await fetch(`${LOOPS_URL}/transactional`, options);
    return (await res.json()) as SendEventResponse;
  }

  async sendEvent(args: SendEventPayload): Promise<SendEventResponse> {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    };

    const res = await fetch(`${LOOPS_URL}/events/send`, options);
    return (await res.json()) as SendEventResponse;
  }

  async createContact(
    args: CreateContactPayload,
  ): Promise<CreateContactResponse> {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    };

    const res = await fetch(`${LOOPS_URL}/contacts/create`, options);
    return (await res.json()) as CreateContactResponse;
  }

  async updateContact(
    args: UpdateContactPayload,
  ): Promise<UpdateContactResponse> {
    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    };

    const res = await fetch(`${LOOPS_URL}/contacts/update`, options);
    return (await res.json()) as UpdateContactResponse;
  }

  async findContact(args: FindContactPayload): Promise<FindContactResponse> {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    };

    const res = await fetch(`${LOOPS_URL}/contacts/delete`, options);
    return (await res.json()) as FindContactResponse;
  }

  async deleteContact(
    args: DeleteContactPayload,
  ): Promise<DeleteContactResponse> {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
    };

    const res = await fetch(`${LOOPS_URL}/contacts/delete`, options);
    return (await res.json()) as DeleteContactResponse;
  }
}
