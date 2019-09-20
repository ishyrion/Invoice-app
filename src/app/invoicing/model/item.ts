export enum Tax {
    t23 = 0.23,
    t8 = 0.08,
    t5 = 0.05
}

export enum Unit {
    piece = 'pc.',
    hour = 'hour',
    service = 'service',
    good = 'good'
}

export interface InvoiceSummary {
    netto: number;
    brutto: number;
    tax: number;
}

export interface Invoice {
    items: InvoiceItem[];
}

export interface InvoiceItem {
    id: string;
    name: string;
    quantity: number;
    unit?: Unit;
    netto?: number;
    tax?: Tax;
    brutto?: number;
}

export class InvoiceItemFactory {
    newInvoiceItem(): InvoiceItem {
        return {
            id: idGenerator(),
            name: '',
            quantity: 1,
            unit: null,
            netto: null,
            tax: null,
            brutto: null
        };
    }
}

function idGenerator() {
    return '_' + Math.random().toString(36).substr(2, 16);
}
