import { type Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "tekora_tv";

const globalForMongo = globalThis as unknown as {
  tekoraTvMongoClient?: Promise<MongoClient>;
};

export function isMongoConfigured(): boolean {
  return Boolean(uri);
}

export async function getDb(): Promise<Db> {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!globalForMongo.tekoraTvMongoClient) {
    const client = new MongoClient(uri, { appName: "tekora-tv" });
    globalForMongo.tekoraTvMongoClient = client.connect();
  }

  const client = await globalForMongo.tekoraTvMongoClient;
  return client.db(dbName);
}
