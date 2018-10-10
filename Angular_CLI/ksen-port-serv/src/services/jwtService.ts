import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import * as Config from 'config';

const secret = (<any>Config.get('Application')).secret;

export interface TokenPayload {
    username: string;
}

class JWTService {
    public createToken(payload: TokenPayload, expiresOn?: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            jwt.sign(payload, secret, {expiresIn: 60 * 60}, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }
    
    public verifyJWTToken(token: string) : Promise<TokenPayload> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, (err: any, payload: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(payload);
                }
            });
        });
    }
}

export const jwtService: JWTService = new JWTService;