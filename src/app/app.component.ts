import { Component , OnInit, ViewChild} from '@angular/core';
import { MyApiService } from './my-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   // Propriétés pour la pagination
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  // Propriétés pour la gestion du tri
  sortDirection: 'asc' | 'desc' = 'asc';
// Propriété pour stocker les données des employees
  users: any | undefined;
    // Constructeur du composant, injection du service MyApiService
  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
      this.affiche();
    }
  // Méthode pour récupérer les données des employees depuis le service
  affiche():void{
   this.myApiService.getUsers().subscribe((data) => {
    this.users = data;
    console.log(this.users);
  });
}
    // Méthode appelée lors du changement de page dans la pagination
  onTableDataChange(event: any){
    this.page = event;
    this.affiche();
  }
  // Méthode appelée lors du changement de la taille de la table
  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page = 1;
    this.affiche();
  }
  // Méthode pour changer la direction de tri lors du clic sur une colonne
sortByColumn(column: string) {
  this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
}
  // Méthode pour obtenir l'icône de tri en fonction de la colonne et de la direction
getSortIcon(column: string): string {
  return this.sortDirection === 'asc' && this.isSortingByColumn(column) ? 'arrow-up' :
         this.sortDirection === 'desc' && this.isSortingByColumn(column) ? 'arrow-down' : '';
}
  // Méthode pour vérifier si la colonne est actuellement utilisée pour le tri
isSortingByColumn(column: string): boolean {
  return this.sortDirection !== 'asc' && this.sortDirection !== 'desc';
}
}
