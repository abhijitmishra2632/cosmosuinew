import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListUserComponent } from './component/user/list-user/list-user.component';
import { ExcelComponent } from './component/home/excel/excel.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { ListallComponent } from './component/user/list-user/listall/listall.component';
import { ListbydateComponent } from './component/user/list-user/listbydate/listbydate.component';
import { ListbylocationComponent } from './component/user/list-user/listbylocation/listbylocation.component';
import { ListonlywhatsappComponent } from './component/user/list-user/listonlywhatsapp/listonlywhatsapp.component';
import { ListonlynotwhatsappComponent } from './component/user/list-user/listonlywhatsapp/listonlynotwhatsapp.component';
import { StoreComponent } from './component/store/store.component';
import { LoginpageComponent } from './component/user/loginpage/loginpage.component';
import { LogoutpageComponent } from './component/user/logoutpage/logoutpage.component';
import { RegisterpageComponent } from './component/user/registerpage/registerpage.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { DeletedproductComponent } from './component/product/deletedproduct/deletedproduct.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { UpdateProductComponent } from './component/product/update-product/update-product.component';
import { CloneProductComponent } from './component/product/clone-product/clone-product.component';
import { DeleteProductComponent } from './component/product/delete-product/delete-product.component';
import { UndoproductComponent } from './component/product/undoproduct/undoproduct.component';
import { ViewCartComponent } from './component/order/view-cart/view-cart.component';
import { AuthGuard } from './service/auth.guard';
import { HistoryComponent } from './component/history/history.component';
import { UploadpicComponent } from './component/product/uploadpic/uploadpic.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/loginpage"},

  {path: "home", component: HomeComponent , canActivate:[AuthGuard]},

  {path: "listusers", component: ListUserComponent , canActivate:[AuthGuard]},
  {path: "excel", component: ExcelComponent}, 
  {path: "updateuser", component: UpdateUserComponent},
  {path: "vallusers", component: ListallComponent},
  {path: "vbyaddeddate", component: ListbydateComponent},
  {path: "vbylocation", component: ListbylocationComponent},
  {path: "vwhatsapponly", component: ListonlywhatsappComponent},
  {path: "vnowhatsapp", component: ListonlynotwhatsappComponent},


  {path: "vstore", component: StoreComponent},
  

  {path: "loginpage", component: LoginpageComponent},
  {path: "logoutpage", component: LogoutpageComponent},
  {path: "registeruser", component: RegisterpageComponent},

  {path: "productmenu", component: ListProductComponent , canActivate:[AuthGuard]},
  {path: "vdeletedproduct", component: DeletedproductComponent},
  {path: "vallproducts", component: ListProductComponent},
  {path: "vaddproduct", component: AddProductComponent},
  {path: "vupdateproduct/:id", component: UpdateProductComponent},
  {path: "vcloneproduct/:id", component: CloneProductComponent},
  {path: "vdeleteproduct/:id", component: DeleteProductComponent},
  {path: "vundoproduct/:id", component: UndoproductComponent},
  {path: "uploadphoto/:id", component: UploadpicComponent},


  {path: "vopencart", component: ViewCartComponent, canActivate:[AuthGuard]},
  {path: "addtocart/:id", component: ViewCartComponent},

  {path: "history", component: HistoryComponent, canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }