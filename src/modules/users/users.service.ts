import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }
  
  create(user: User) {
    return this.userModel.create(user);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.create(id);
  }

  update(id: string, user: User) {
    return this.userModel.findByIdAndUpdate(id, user);
  }

  remove(id: string) {
    return this.userModel.remove(id);
  }
}
