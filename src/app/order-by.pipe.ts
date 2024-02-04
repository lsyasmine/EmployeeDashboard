import { Pipe, PipeTransform } from '@angular/core';
import { orderBy as _orderBy } from 'lodash-es';// Importation de la fonction orderBy depuis la bibliothèque lodash-es

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
// Méthode de transformation appelée lors de l'utilisation du pipe
  // Elle trie le tableau d'objets selon la colonne spécifiée et la direction spécifiée
  transform(data: any[], orderBy: string, direction: 'asc' | 'desc' = 'asc'): any[] {
      // Utilisation de la fonction _orderBy de lodash-es pour effectuer le tri
    return _orderBy(data, orderBy, direction);
 }
}
