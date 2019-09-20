import { Observable, of } from 'rxjs';
import { Item } from './item';

export class LocalItemCatalog {
    private availableItems: Item[] = [
        {name: 'Website Project'},
        {name: 'Paycheck'},
        {name: 'JavaSricpt Course'}
    ];

    items(query: string): Observable<Item[]> {
        return of(this.availableItems.filter(item => item.name.includes(query)));
    }
}
