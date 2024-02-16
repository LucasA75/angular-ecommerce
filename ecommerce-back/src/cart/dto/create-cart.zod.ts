import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema  } from 'zod';
import { z } from 'zod';
import mongoose from 'mongoose';

export const createCartSchemaZod = z
  .object({
    client: z.string().refine(value => {
        return mongoose.Types.ObjectId.isValid(value);
    }, {
        message: 'Its not a ObjectID valid.'
    }),
    status: z.string(),
    totalPrice: z.number(),
    amount: z.number(),
    product: z.array(z.any()).nonempty()
  })
  .required();

export type CreateCartDtoZod = z.infer<typeof createCartSchemaZod>;