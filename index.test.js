const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        // await db.sync({ force: true });
    })

    // Write your tests here
    
    test('can create a User', async () => {
        const testUser = await User.create({ username: 'George', email: '1234@gmail.com' });
        console.log(testUser)
        (expect(testUser.username).toBe('George') && expect(testUser.email).toBe('1234@gmail.com'))
    })



})