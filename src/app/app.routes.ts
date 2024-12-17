import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'about' , component: AboutComponent},
    {path: 'news' , component: NewsComponent},
    {path: 'work' , component: WorkComponent},
    {path: 'services' , component: ServicesComponent},
    {path: 'contact' , component: ContactComponent}
];
