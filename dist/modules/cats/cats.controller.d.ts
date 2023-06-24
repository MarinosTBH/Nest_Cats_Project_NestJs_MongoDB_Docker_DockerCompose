import { CatService } from "./cat.service";
import { Cat } from "./schema/cat.schema";
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    findAll(): Promise<import("./schema/cat.schema").CatDocument[]>;
    create(cat: Cat): Promise<import("./schema/cat.schema").CatDocument>;
}
