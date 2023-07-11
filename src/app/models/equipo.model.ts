/* Author: Felipe reyes  => { Nekosor } Github*/
import { Jugador } from "./jugador.model";

export enum Zona {
    Norteamerica = 'Norteamerica',
    Sudamerica = 'Sudamerica',
    Europa = 'Europa',
    SudesteAsia = 'SudesteAsia',
    China = 'China',
    CIS = 'CIS'
}

export enum DPC {
    P0,
    P10,
    P20,
    P30,
    P40,
    P50,
    P60,
    P70,
    P80,
    P90,
    P100,
    P200,
    P300,
    P400,
    P500,
    P600,
    P700,
    P800,
    P900,
    P1000,
    P1100,
    P1200,
    P1300,
    P1400,
    P1500,
    P1600,
    P1700,
    P1800,
    P1900,
    P2000,
    P2100,
    P2200,
}

export class Equipo {
    id!: number;
    name!: string;
    region!: Zona;
    puntosClasificacion!: DPC;
    jugadores!: Jugador[];
}
