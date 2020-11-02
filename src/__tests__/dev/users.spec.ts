import * as chai from "chai";
import { newUserDoc } from '../samples/samples';
import { usersHelper } from "../../libs/users-helper";

const expect = chai.expect;
const myDoc = newUserDoc;

describe('users-helper dev test cases suite', () => {

  it('create(), should create item in db', async () => {
    const doc = await usersHelper.create(myDoc);
    let v = doc.email === myDoc.email;
    expect(v).to.be.true;
  });

  it('list(), should return all active users docs, ', async () => {
    const listDocs = await usersHelper.list();
    let v = listDocs.length !== 0;
    listDocs.forEach(d => v = v && d.email !== null);
    expect(v).to.be.true;
  });

  it('update(), should update item in db, ', async () => {
    const updatedDoc = {
      name: 'TestNewId'
    }
    const doc = await usersHelper.update(newUserDoc.email, updatedDoc);
    let v = doc.name === updatedDoc.name;
    expect(v).to.be.true;
  });

  it('delete(), should delete doc for given user id', async () => {
    const deleted = await usersHelper.delete(myDoc.email);
    expect(deleted).to.be.true;
  });
});
