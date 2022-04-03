import {MongoClient, ObjectId} from 'mongodb';

abstract class DataBaseAbstract {

  private client: any;
  private sheet: string;

  // 宣告時 提供資料表名稱
  public constructor(sheetName: string)
  {
    this.client = new MongoClient("mongodb://stock-backend-database:TKPh12YgkwXLxG1TkKNjU5YVUArDBNkfknG4T3MOMdFhGHyM7umkMrtU0L8ILJwv53V8UtK3nLLGElFP7MtFig==@stock-backend-database.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@stock-backend-database@");

    this.sheet = sheetName;
  }

  public async connect() {
    await this.client.connect();
    const database = this.client.db("single-stock");
    const collection = database.collection(this.sheet);

    return collection;
  }

  public close() {
    this.client.close();
  }
}

export default DataBaseAbstract;