/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import IItem from '../interfaces/itemInterface';
import itemModel from '../model/itemModel';

export default class ItemSetController {
  // eslint-disable-next-line class-methods-use-this
  public async addItem(item: IItem): Promise<IItem | Object> {
    try {
      const newItem = await (await itemModel.insertMany(item)).pop();
      return newItem as IItem;
    } catch (error) {
      return {
        error: true,
      };
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public async setItem(item: IItem): Promise<boolean> {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const updatedItem = await itemModel.updateOne({ _id: item._id }, item, {
        upsert: true,
      });
      if (updatedItem.modifiedCount === 1) return true;
      return false;
    } catch (error) {
      return false;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public async getItem(item: IItem): Promise<IItem | Object> {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const getItem = await itemModel.findById(item._id);
      return getItem as IItem;
    } catch (error) {
      return {
        error: true,
      };
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public async deleteItem(item: IItem): Promise<boolean> {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const getItem = await itemModel.deleteOne({ _id: item._id });
      if (getItem.deletedCount === 1) return true;
      return false;
    } catch (error) {
      return false;
    }
  }
}
