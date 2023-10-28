import mongoose from 'mongoose';
import {default as t} from '../../../constants';

export class DBClass {
  constructor() {
    this.connectMongoDB();
  }
  async connectMongoDB() {
    try {
      await mongoose.connect(t.DEFAULT_MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Mongodb successfully connected...');
    } catch (error) {
      console.log(error, 'Mongodb driver error');
      console.log('Mongodb failed to connect...');
    }
  }
}
