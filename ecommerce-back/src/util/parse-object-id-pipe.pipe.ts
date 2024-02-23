import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class ParseObjectIdPipe
  implements PipeTransform<unknown, mongoose.Types.ObjectId>
{
  transform(value: unknown): mongoose.Types.ObjectId {
    const validObjectId: boolean = mongoose.isObjectIdOrHexString(value);
    if (!validObjectId) {
      throw new BadRequestException('Invalid ObjectId');
    }
    return value as mongoose.Types.ObjectId;
  }
}
