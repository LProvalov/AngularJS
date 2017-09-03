import * as mongoose from "mongoose";
import * as Config from 'config';
var appConfig: any = Config.get('Application');

export class DataProvider{
    private bookSchema: mongoose.Schema;

    get BookSchema(){
        return this.bookSchema;
    }

    constructor(){
        this.createSchemas();        
        mongoose.model('Book', this.bookSchema);
        mongoose.connect(appConfig.dbUrl);
    }

    private createSchemas(){

        this.bookSchema = new mongoose.Schema({
            title: String,
            author: String,
            category: String
        });

    }
}