import { Application, Request, Response } from "express";
import { ApiBase } from "./apiBase";
import { IUserModel, UserModel } from "../models/models";
import { jwtService, TokenPayload } from "./../services/services"

export class UsersApi extends ApiBase {
    public static create(app: Application){
        /*
        app.get(ApiBase.apiUrl + '/users/list', (req: Request, res: Response) => {
            new UsersApi().getUsersList(req, res);
        });

        app.post(ApiBase.apiUrl + '/users/create', (req: Request, res: Response) => {
            new UsersApi().createUser(req, res);
        });

        app.get(ApiBase.apiUrl + '/users/find', (req: Request, res: Response) => {
            new UsersApi().findUser(req, res);
        });
        */
        app.post(ApiBase.apiUrl + '/users/authenticate', (req: Request, res: Response) => {
            new UsersApi().authenticate(req, res);
        });

        app.post(ApiBase.apiUrl + '/users/register', (req: Request, res: Response) => {
            new UsersApi().register(req, res);
        });
    }

    constructor(){
        super();
    }

    protected getUsersList(req: Request, res: Response){
        console.log('getUsersList request');
        UserModel.getAll().then(
            (users) => {
                res.json(users);
            },
            (reason) => {
                res.json(reason);
            }
        );
    }

    protected createUser(req: Request, res: Response){
        let username: string = req.body.username;
        let password: string = req.body.password;

        console.log('createUser request ' + username + ' ' + password);
        if(username === undefined || password === undefined) {
            res.send("User can't be created.");
            return;
        }
        let user: IUserModel = <IUserModel> {
            name: username,
            password: password,
            createdAt: new Date()
        }
        UserModel.create(user).then(
            (user) => {
                res.send("User created successfully");
            }, 
            (reason) =>{
                res.json(reason);
            }
        );
    }

    protected findUser(req: Request, res: Response){
        let username: string = req.body.username;
        console.log('findUser request ' + username);
        UserModel.findUser(username).then(user => {
            if(user){
                res.json({ user });
            } else {
                res.send("can't find this user");
            }
        });
    }

    protected authenticate(req: Request, res: Response) {
        let username: string = req.body.username;
        let password: string = req.body.password;
        UserModel.findUser(username).then( user => {
            if (user != null && user.password == password) {
                let token: TokenPayload = { username: username };
                jwtService.createToken(token)
                    .then( (token: string) => { 
                        res.json({token: token});
                    },
                    (err) => {
                        throw new Error(err);
                    });
            } else {
                res.send(`Error: can't find user with username: ${username}`);
            }
        });
    }

    protected register(req: Request, res: Response) {
        let username: string = req.body.username;
        let password: string = req.body.password;
        UserModel.findUser(username).then( user => {
            if (user == null) {
                UserModel.create( <IUserModel>{ name: username, password: password, createdAt: new Date() });
                res.json({ user: {token: "some token"}});
            } else {
                res.send("Error: user already exist");
            }
        });
    }
}