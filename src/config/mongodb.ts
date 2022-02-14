import mongoose from 'mongoose';

export default class MongoDB {
  public static async connection() {
    try {
      await mongoose.connect(process.env.URL_MONGODB!);
      return true;
    } catch (e) {
    //   console.log(e);
      return false;
    }
  }
}
