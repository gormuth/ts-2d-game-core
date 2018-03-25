import { Map } from "./map/Map";
import {Cell} from "./cells/Cell";

const map = new Map({
    name: "test",
    path: "test",
    positionX: 0,
    positionY: 0,
    height: 10,
    width: 10,
});

console.log(map.map);

map.setCellProperties({
    background: "test",
    solid: false,
    positionX: 5,
    positionY: 5,
});

console.log("-----------------------------------------------");

console.log(map.map);

const cell = new Cell("../../ts-2d-game/cell/test/test.cell");

console.log(cell.cellDefinitions);

cell.createCell({
    background: "test",
    label: "grasse",
    solid: false,
    positionX: 0,
    positionY: 0,
});
console.log(cell.cellDefinitions);

cell.save();
