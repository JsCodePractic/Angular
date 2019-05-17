import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes, RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutsComponent } from './abouts/abouts.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutsComponent},
  {path: 'comment', component: CommentComponent},
  {path: '**', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutsComponent,
    CommentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
