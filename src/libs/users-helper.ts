import { IDictionary } from "../common/defs";
import { DbHelper } from './db-helper';

export interface ICrud {
	create(doc: IDictionary): Promise<IDictionary>
  update(id: string, updateDoc: IDictionary): Promise<IDictionary>
  delete(id: string): Promise<boolean>
  list(args: IDictionary): Promise<IDictionary[]>
}

const USER_TABLE_NAME = 'users';

export class UsersCrud implements ICrud {
  private dbHelper: DbHelper;

	constructor() {
    this.dbHelper = new DbHelper(USER_TABLE_NAME);
	}

	async create(doc: IDictionary): Promise<IDictionary> {
		return this.dbHelper.create(doc);
	}

	async update(id: string, updateDoc: IDictionary): Promise<IDictionary> {
    return this.dbHelper.update(id, updateDoc);
  }

	async delete(id: string): Promise<boolean> {
    return this.dbHelper.delete(id);
  }

	async list(args: IDictionary = {}): Promise<IDictionary[]> {
		return this.dbHelper.list(args);
	}
}

export const usersHelper = new UsersCrud();

if (typeof require !== 'undefined' && require.main === module) {
  const { newUserDoc } = require('../__tests__/samples/samples');
  async function testUsersHelper() {
    let cDoc = await usersHelper.create(newUserDoc);
    console.log(`create(), cDoc = ${JSON.stringify(cDoc)}`);
    if (!cDoc) {
      console.error(`cDoc should not be null.`);
      return;
    }
    let updateProps = {
      name: 'TestUser123'
    }
    const uDoc = await usersHelper.update(newUserDoc.email, updateProps);
    if (!uDoc) {
      console.error(`uDoc should not be null`);
      return;
    }
    const lDocs = await usersHelper.list();
    console.log(`list(), lDocs = ${JSON.stringify(lDocs)}`);
    await usersHelper.delete(newUserDoc.id);
  }
  testUsersHelper();
}
