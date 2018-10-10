import * as bodyParse from "body-parser";
import * as express from "express";
import * as http from "http";
import * as socketIo from "socket.io";
import * as mongoose from "mongoose";
import errorHandler = require("errorhandler");

import { IndexRoute } from "./routes";
import { PictureApi, ProductApi, UsersApi } from "./api/apiAll";
import { BaseSocketServer } from "./socket/socket";

import * as Config from 'config';
import { ProductModel, ProductRepository, OrderModel, OrderRepository, 
    GroupModel, GroupRepository, UserModel, UserRepository } from "./models/models";

import { ApiBase } from './api/apiBase';
import { Auth } from './middleware/auth-token';

var appConfig: any = Config.get('Application');

const ALLOWED_ORIGINS = [
    'http://localhost:4200'
];

export class Server {
    public app: express.Application;
    private httpPort: number;
    private io: SocketIO.Server;
    private httpServer: http.Server;
    private apiUrl: string = "/api";

    public static bootstrap(httpPort: any): Server {
        return new Server(httpPort);
    }

    constructor(httpPort: number) {
        this.httpPort = httpPort;
        this.app = express();
        this.config();
        this.createHttpServer();
        this.routes();
        this.api();
        this.sockets();
        this.errorHandling();
    }

    private config() {
        this.app.use(express.static(appConfig.pathToPublic));
        this.app.use("/dummy/", express.static(appConfig.pathToPublic))

        this.app.use((req: express.Request, res, next) => {
            if (ALLOWED_ORIGINS.indexOf(req.headers.origin as string) > -1) {
                res.setHeader('Access-Control-Allow-Credentials', 'true');
                res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
            }
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, HEAD, DELETE, OPTIONS");
            next();
        });
        
        //this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => AUTH(req, res, next));

        this.app.use(bodyParse.json());
        this.app.use(bodyParse.urlencoded({ extended: true }));

        this.app.set("port", this.httpPort);
        this.app.set('view engine', 'html');

        let dbUrl = appConfig.dbUrl;
        mongoose.connect(dbUrl, {
            "server": {
                "socketOptions": { "keepAlive": 1 }
            }
        });
        mongoose.connection.on('connected', () => {
            ProductModel.initialize(new ProductRepository());
            OrderModel.initialize(new OrderRepository());
            GroupModel.initialize(new GroupRepository());
            UserModel.initialize(new UserRepository());
        });
    }

    private createHttpServer() {
        this.httpServer = http.createServer(this.app);
    }

    private routes() {
        let router: express.Router;
        router = express.Router();
        IndexRoute.create(router);
        this.app.use(router);
    }

    private api() {
        this.app.use(`${ApiBase.ApiUrlPr()}`, (req: express.Request, res, next) => {
            Auth(req, res, next);
        });
        PictureApi.create(this.app);
        ProductApi.create(this.app);
        UsersApi.create(this.app);
    }

    private sockets(): void {
        this.io = socketIo(this.httpServer);
    }

    public listen(): void {
        this.httpServer.listen(this.httpPort, () => {
            console.log('Runing server on port %s', this.httpPort);
        });
        this.httpServer.on("error", this.onError);
        this.httpServer.on("listening", this.onListening.bind(this));

        this.io.on('connect', (socket: SocketIO.Socket) => {
            console.log('Connected client on port %s', this.httpPort);

            BaseSocketServer.create(socket, this.io);

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public errorHandling(): void {
        // for 404
        this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(404).send(`Sorry can't find that.`);
        });

        // errors handling
        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            if (req.xhr) {
                res.status(500).send({ error: 'Something failed!' });
            } else {
                next(err);
            }
        });

        this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(500);
            res.render('error', { error: err });
        });
        this.app.use(errorHandler);
    }

    protected onError(error: any) {
        if (error.syscall !== "listen") {
            throw error;
        }

        var bind = typeof this.httpPort === "string"
            ? "Pipe " + this.httpPort
            : "Port " + this.httpPort;

        switch (error.code) {
            case "EACCES":
                console.error(bind + " request elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(bind + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    }

    protected onListening() {
        var address: { port: number; family: string; address: string; } =
            this.httpServer.address();
        var bind = typeof (address) === "string"
            ? "pipe " + address
            : "port " + address.port
    }
}