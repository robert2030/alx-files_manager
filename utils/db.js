import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.connected = false;

    this.client.connect()
      .then(() => {
        this.database = this.client.db(database);
        this.connected = true;
        // console.log('Connected successfully to MongoDB server');
      })
      .catch((err) => {
        console.error('MongoDB client error:', err);
      });
  }

  isAlive() {
    return this.connected;
  }

  async nbUsers() {
    if (!this.connected) {
      throw new Error('MongoClient is not connected');
    }
    try {
      const usersCollection = this.database.collection('users');
      const count = await usersCollection.countDocuments();
      return count;
    } catch (err) {
      console.error('Error counting users:', err);
      return 0;
    }
  }

  async nbFiles() {
    if (!this.connected) {
      throw new Error('MongoClient is not connected');
    }
    try {
      const filesCollection = this.database.collection('files');
      const count = await filesCollection.countDocuments();
      return count;
    } catch (err) {
      console.error('Error counting files:', err);
      return 0;
    }
  }
}

const dbClient = new DBClient();
export default dbClient;
