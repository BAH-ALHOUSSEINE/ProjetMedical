import { Time } from "@angular/common";
import { Medecin } from "./medecin.model";
import { Patient } from "./patient.model";

export class Rendezvous {
    id !: number;
    date !: Date;
    heure !: String;
    medecin !: Medecin;
    patient !: Patient;
    status !: string;
}
