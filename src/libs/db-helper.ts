import { IDictionary } from "../common/defs";
import fs from 'fs';
import path from 'path';

export class DbHelper {

  private filePath: string;
  private records: IDictionary[];

  constructor(tableName: string) {
    this.filePath = path.resolve(`./data/${tableName}.json`);
    this.records = require(this.filePath);
  }

  async writeToDb(doc: any) {
    fs.writeFileSync(this.filePath, JSON.stringify(doc));
  }

  async create(doc: IDictionary): Promise<IDictionary> {
    this.records.push(doc);
    this.writeToDb(this.records);
    return doc; // in a real db, it would consists some extra attributes like createdAt, updatedAt etc
  }

  async update(id: string, updateDoc: IDictionary): Promise<IDictionary> {
    const doc = this.records.find((i: any) => i.email);
    Object.assign(doc, updateDoc);
    this.writeToDb(this.records);
    return doc;
  }

  async delete(id: string): Promise<boolean> {
    try {
      const newRecords = this.records.filter((i: any) => i.email !== id);
      if (newRecords.length === this.records.length) {
        return false; // nothing deleted
      }
      this.writeToDb(newRecords);
      return true;
    } catch (e) {
      return false;
    }
  }

  async list(): Promise<IDictionary[]> {
    return this.records;
  }
}