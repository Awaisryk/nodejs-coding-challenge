
import { USERS_ROUTE } from '../../routes/constants';
import app from '../../app';
import * as chai from 'chai';
import { newUserDoc } from '../samples/samples';
import { usersHelper } from '../../libs/users-helper';
import request from 'supertest';
const expect = chai.expect;

describe('Users Routes test suite.', () => {

	before(async () => {
		await usersHelper.delete(newUserDoc.email).catch(err => console.log(err));
	});

	it('should create user doc', async () => {
		const route = USERS_ROUTE;
		const response = await request(app).post(route).send(newUserDoc);
		expect(response.status === 200).to.be.true;
	});

	it('should update user doc', async () => {
		const email = newUserDoc.email;
		const route = `${USERS_ROUTE}/${email}`;
		const updatedDoc = {
      name: 'TestNewId'
    }
		const response = await request(app).patch(route).send(updatedDoc);
		expect(response.status === 200).to.be.true;
	});

	it('should fetch all users docs', async () => {
		const response = await request(app).get(USERS_ROUTE)
		expect(response.status === 200).to.be.true;
	})

	it('should delete user doc for given user id', async () => {
		const email = newUserDoc.email;
		const route = `${USERS_ROUTE}/${email}`;
		const response = await request(app).delete(route);
		expect(response.status === 200).to.be.true;
	});
})