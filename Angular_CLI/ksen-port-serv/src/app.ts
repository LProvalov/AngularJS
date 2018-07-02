import { Server } from "./server";
import * as Config from 'config';

//var appConfig = Config.get('Application');

class App {
    private server: Server;
    private httpPort: number;

    constructor() {
        this.httpPort = this.normalizePort(process.env.PORT || "" + 8100);
        this.server = Server.bootstrap(this.httpPort);
    }

    public main() {
        this.server.listen();

    }

    protected normalizePort(val: string): number {
        var port: number = parseInt(val, 10);
        if (isNaN(port)) { throw "invalid argument value"; }
        if (port >= 0) { return port; }
        throw "port can't be less than zero";
    }
}

var app: App = new App();
app.main();