import { Medecin } from "./medecin.model";
import { Patient } from "./patient.model";
import { Rendezvous } from "./rendezvous.model";

export class Consulation {

    diagnostique !: String;
    prescription !: String;
    dateconsulataion !: Date;
    medecin !: Medecin | null;
    patient !: Patient | null;
    rendezvous !: Rendezvous;
}
