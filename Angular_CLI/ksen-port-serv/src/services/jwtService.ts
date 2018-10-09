import jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import * as Config from 'config';

const secret = (<any>Config.get('Application')).secret;

export interface TokenPayload {
    username: string;
}

export function createToken(payload: TokenPayload, expiresOn?: number): Promise<string> {
    const jwtPayload = _.extend(payload, _.omit({
        exp: expiresOn ? expiresOn / 1000 : undefined
    }));

    return new Promise<string>((resolve, reject) => {
        jwt.sign(jwtPayload, secret, {}, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

export function verifyJWTToken(token: string) : Promise<TokenPayload> {
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