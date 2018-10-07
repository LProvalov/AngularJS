import { Routes, RouterModule } from "@angular/router"; 
import { MainComponent } from "./pages/main/main.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { LoginComponent } from "./pages/login/login.component";

import { AuthGuard } from "./services/auth.guard";
import { UploadPicturesComponent } from "./pages/upload-pictures/upload-pictures.component";

const appRoutes: Routes = [
    { path: '', component: MainComponent, canActivate: [AuthGuard]},
    { path: 'upload', component: UploadPicturesComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];
  
export const routing = RouterModule.forRoot(appRoutes);