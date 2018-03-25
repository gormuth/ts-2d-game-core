import { MapParameters } from "../models/MapModel";
import { CellProperties } from "../models/CellsModel";

export class Map {
    public name: string;
    public path: string;
    public positionX: number;
    public positionY: number;
    public height: number;
    public width: number;
    public map: any[];

    constructor(mapParameters: MapParameters) {
        this.name      = mapParameters.name;
        this.path      = mapParameters.path;
        this.positionX = mapParameters.positionX;
        this.positionY = mapParameters.positionY;
        this.height    = mapParameters.height;
        this.width     = mapParameters.width;
        this.map       = this.createMap();
    }

    // public setCellProperties(cellsProperties: CellProperties) {
    //     const background = cellsProperties.background;
    //     const solid      = cellsProperties.solid;
    //     const positionX  = cellsProperties.positionX;
    //     const positionY  = cellsProperties.positionY;
    //     this.map[positionX][positionY] = {
    //         backgroundImage: background,
    //         isSolid: solid,
    //     };
    // }

    // TODO: Create interface for map object
    private createMap(): any[] {
        const map = this.generateCellsX(this.generateCellsY.bind(this));
        return map;
    }

    private generateCellsY(): any[] {
        const mapX: any[] = [];
        for (let i = 0; i < this.height; i++) {
            mapX.push(0);
        }
        return mapX;
    }

    private generateCellsX(column: () => any[]): any[] {
        const mapY: any[] = [];
        for (let i = 0; i < this.width; i++) {
            mapY.push(column());
        }
        return mapY;
    }

}
