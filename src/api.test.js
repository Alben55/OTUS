import axios from "axios";
import 'dotenv/config';
import config from "../framework/config/config.js";

describe('API test', () => {
    it('Authorization', async () => {
            const response = await axios.post(
                config.authURL,
                {
                    userName: config.userName,
                    password: config.password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            expect(response.status).toBe(200);
            expect(response.data).toBe(true)

        });

        it('Get userinfo', async () => {
            const response = await axios.get(
                config.userInfoURL,
                {
                    Userid: config.user_id
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            expect(response.status).toBe(200);

        });

        it('Delete user', async () => {
            const response = await axios.delete(
                config.deleteURL,
                {
                    Userid: config.user_id
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            expect(response.status).toBe(200);
        });
});
