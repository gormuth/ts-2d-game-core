import { MapParameters } from "../models/MapModel";
import { CellProperties } from "../models/CellsModel";
import * as fs from "fs";

export class Cell {
    public cellFile: string;
    public cellDefinitions: any = {};

    constructor(cellFile: string) {
        this.cellFile = cellFile;
        this.initCellFile();
    }

    public createCell(cellProperties: CellProperties): void {
        if (this.cellDefinitions[cellProperties.label]) { throw new Error("This cell already exists"); }
        this.cellDefinitions[cellProperties.label] = cellProperties;
    }

    public save(): void {
        fs.writeFile(this.cellFile, JSON.stringify(this.cellDefinitions), {encoding : "utf-8"}, (err: NodeJS.ErrnoException) => {
            if (err) { throw err; }
            console.log("success");
        });
    }
    /**
     * Initialize cell file datas
     */
    private initCellFile(): void {
        if (fs.existsSync(this.cellFile)) {
            this.cellDefinitions = JSON.parse( fs.readFileSync(this.cellFile, "utf-8") );
        } else {
            this.createCellFile();
        }
    }

    /**
     * Create cell file datas
     */
    private createCellFile(): void {
        const cellDatas = JSON.stringify(this.cellDefinitions, null, 4);
        fs.writeFile(this.cellFile, cellDatas, {encoding : "utf-8"}, (err: NodeJS.ErrnoException) =>  {
            if (err) { throw err; }
            console.log("success");
        });
    }
}
