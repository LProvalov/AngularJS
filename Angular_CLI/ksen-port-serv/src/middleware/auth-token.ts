import * as Express from 'express';
import * as _ from 'lodash';

import { jwtService, TokenPayload } from './../services/services';
import { ApiBase } from "./../api/apiBase";

declare module 'express' {
    interface Request {
        tokenPayload: TokenPayload;
    }
}

const BEARER_PREFIX = 'Bearer ';

async function verifyAuthorizationHeader(req: Express.Request): Promise<TokenPayload> {
    const authHeader = req.get('Authorization');
    if (!_.startsWith(authHeader, BEARER_PREFIX)) {
        throw new Error("Token should be prefixed with auth type");
    }

    const token = _.replace(authHeader, BEARER_PREFIX, '');
    return jwtService.verifyJWTToken(token)
    .catch((err) => {
        throw new Error("Failed to verify token");
    });
}

async function verifyAuthenticationId(tokenPayload: TokenPayload): Promise<void> {
    /*
    const authId = await UserService.getUserAuthenticationId(tokenPayload.username)

    if (!_.isEqual(authId, tokenPayload.authenticationId)) {
        throw new NotAuthorizedError('Failed to verify authentication id', API.ErrorCode.INVALID_TOKEN)
    }
    */
}

export function Auth(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    verifyAuthorizationHeader(req)
    .then((payload) => {
        return verifyAuthenticationId(payload)
        .then( () => {
            req.tokenPayload = payload;
            next();
        })
    })
    .catch(next);
}