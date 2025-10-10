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


export const routes: Routes = [
    { path: "", component: AcceuilComponent },
    {
        path: "dashbord", component: DashbordComponent, children: [
            { path: "rendezvous", component: RendezvousComponent },
            { path: "takerendezvous", component: TakerendezvousComponent },
            { path: "document", component: DocumentComponent },
            { path: "profile", component: ProfileComponent },
            { path: "addmedecin", component: AddmedecinComponent },
            { path: "adddocument", component: AdddocumentComponent },

        ]
    }

];
