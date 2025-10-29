import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { TakerendezvousComponent } from './takerendezvous/takerendezvous.component';
import { DocumentComponent } from './document/document.component';
import { ProfileComponent } from './profile/profile.component';
import { AdddocumentComponent } from './adddocument/adddocument.component';
import { AddmedecinComponent } from './addmedecin/addmedecin.component';
import { AddrendezvousComponent } from './addrendezvous/addrendezvous.component';
import { EditrendezvousComponent } from './editrendezvous/editrendezvous.component';
import { RendezvouspatientComponent } from './rendezvouspatient/rendezvouspatient.component';
import { MyconsultationComponent } from './myconsultation/myconsultation.component';
import { HistoriqueconsultationComponent } from './historiqueconsultation/historiqueconsultation.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { EditpatientComponent } from './editpatient/editpatient.component';
import { ProfilmedecinComponent } from './profilmedecin/profilmedecin.component';
export const routes: Routes = [
    { path: "", component: AcceuilComponent },
    {
        path: "dashbord", component: DashbordComponent, children: [
            { path: "rendezvous", component: RendezvousComponent },
            { path: "takerendezvous", component: TakerendezvousComponent },
            { path: "document", component: DocumentComponent },
            { path: "profile", component: ProfileComponent },
            { path: "profilemedecin", component: ProfilmedecinComponent },
            { path: "addmedecin", component: AddmedecinComponent },
            { path: "addrendezvous", component: AddrendezvousComponent },
            { path: "adddocument", component: AdddocumentComponent },
            { path: "myconsultation", component: MyconsultationComponent },
            { path: "editrendezvous/:id", component: EditrendezvousComponent },
            { path: "rendezvouspatient", component: RendezvouspatientComponent },
            { path: "historiqueconsultation/:matricule", component: HistoriqueconsultationComponent },
            { path: "editpatient/:id", component: EditpatientComponent },

        ], canActivate: [AuthGuard]
    },
    { path: "contact", component: ContactComponent }


];


