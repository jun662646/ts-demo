import {aaaa, db} from "../global";

describe('Global', () => {

    test('test', async () => {
        expect(aaaa).toBe('aaaa');

        const result = await db.user.findMany({});
        expect(result.length).toBeGreaterThan(0);
    });
});