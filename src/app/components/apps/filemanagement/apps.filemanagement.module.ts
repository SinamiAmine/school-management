import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { AppsFileManagementRoutingModule } from './apps.filemanagement-routing.module';
import { AppsFileManagementComponent } from './apps.filemanagement.component';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { FolderComponent } from './folder/folder.component';
import { CardComponent } from './card/card.component';
import { UploaderComponent } from './uploader/uploader.component';
import { FileManagementService } from './service/file-management.service';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        AppsFileManagementRoutingModule,
        FormsModule,
        DialogModule,
        InputTextareaModule,
        ButtonModule,
        CalendarModule,
        InputTextModule,
        DropdownModule,
        RippleModule,
        ToastModule,
        AvatarModule,
        TableModule,
        FileUploadModule,
        ChartModule,
        MenuModule
    ],
    declarations: [AppsFileManagementComponent, FolderComponent, CardComponent, UploaderComponent],
    providers: [FileManagementService]
})
export class AppsFileManagementModule { }
