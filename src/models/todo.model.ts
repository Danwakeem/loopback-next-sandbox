import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  complete?: boolean;

  @property()
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
