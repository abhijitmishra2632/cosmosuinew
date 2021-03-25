import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListUserComponent } from './component/user/list-user/list-user.component';
import { UpdateUserComponent } from './component/user/update-user/update-user.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ExcelComponent } from './component/home/excel/excel.component';
import { ListbydateComponent } from './component/user/list-user/listbydate/listbydate.component';
import { ListbylocationComponent } from './component/user/list-user/listbylocation/listbylocation.component';
import { ListonlywhatsappComponent } from './component/user/list-user/listonlywhatsapp/listonlywhatsapp.component';
import { ListallComponent } from './component/user/list-user/listall/listall.component';
import { ListonlynotwhatsappComponent } from './component/user/list-user/listonlywhatsapp/listonlynotwhatsapp.component';
import { ListProductComponent } from './component/product/list-product/list-product.component';
import { CloneProductComponent } from './component/product/clone-product/clone-product.component';
import { UpdateProductComponent } from './component/product/update-product/update-product.component';
import { AddProductComponent } from './component/product/add-product/add-product.component';
import { ProductMenuComponent } from './component/product/product-menu/product-menu.component';
import { DeleteProductComponent } from './component/product/delete-product/delete-product.component';
import { ViewCartComponent } from './component/order/view-cart/view-cart.component';
import { DeletedproductComponent } from './component/product/deletedproduct/deletedproduct.component';
import { UndoproductComponent } from './component/product/undoproduct/undoproduct.component';
import { LoginpageComponent } from './component/user/loginpage/loginpage.component';
import { RegisterpageComponent } from './component/user/registerpage/registerpage.component';
import { ForgetpageComponent } from './component/user/forgetpage/forgetpage.component';
import { UpdatepasswordComponent } from './component/user/updatepassword/updatepassword.component';
import { LogoutpageComponent } from './component/user/logoutpage/logoutpage.component';
import { StoreComponent } from './component/store/store.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './service/auth.guard';
import { HistoryComponent } from './component/history/history.component';
import { UploadpicComponent } from './component/product/uploadpic/uploadpic.component';
import { PdfcreatorComponent } from './component/pdfcreator/pdfcreator.component';
import { AdminRoleComponent } from './component/admin-role/admin-role.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { AddInventoryComponent } from './component/inventory/add-inventory.component';
import { ViewInventoryComponent } from './component/inventory/view-inventory.component';
import { ShowOrdersComponent } from './component/show-orders/show-orders.component';
import { ViewAdminOrdersComponent } from './component/view-admin-orders/view-admin-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    UpdateUserComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExcelComponent,
    ListbydateComponent,
    ListbylocationComponent,
    ListonlywhatsappComponent,
    ListallComponent,
    ListonlynotwhatsappComponent,
    ListProductComponent,
    CloneProductComponent,
    UpdateProductComponent,
    AddProductComponent,
    ProductMenuComponent,
    DeleteProductComponent,
    ViewCartComponent,
    DeletedproductComponent,
    UndoproductComponent,
    LoginpageComponent,
    RegisterpageComponent,
    ForgetpageComponent,
    UpdatepasswordComponent,
    LogoutpageComponent,
    StoreComponent,
    HistoryComponent,
    UploadpicComponent,
    PdfcreatorComponent,
    AdminRoleComponent,
    InventoryComponent,
    AddInventoryComponent,
    ViewInventoryComponent,
    ShowOrdersComponent,
    ViewAdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
