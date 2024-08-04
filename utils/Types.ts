export interface Cell {
    state: CellState;
    id: number | undefined;
    color: string;
    x: number;
    y: number;
    originX: number;
    originY: number;
}

export enum CellState {
    NO_SHIP,
    SHIP
}