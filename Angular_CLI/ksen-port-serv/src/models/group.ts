import * as mongoose from 'mongoose';
import { RepositoryBase } from '../providers/repositoryBase';
import { BaseModel, IBaseModel } from './baseModel';

var Schema = mongoose.Schema;

export interface IGroup extends mongoose.Document {
    title: string;
    description: string;
}

let _groupSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: true,
        default: ""
    }
})

var _model = mongoose.model<IGroup>('group', _groupSchema, 'groups', true);
export class GroupRepository extends RepositoryBase<IGroup> {
    constructor() {
        super(_model);
    }
}
Object.seal(GroupRepository);

class GroupModelClass extends BaseModel<IGroup> implements IBaseModel<IGroup> {
    constructor() {
        super();
    }
}
Object.seal(GroupModelClass);
export const GroupModel: GroupModelClass = new GroupModelClass();