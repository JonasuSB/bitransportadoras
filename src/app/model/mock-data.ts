export class Item {
    day: string;
    qty: number;
    cubage: number;
    weight: number;
  
    constructor(day: string, qty: number, cubage: number, weight: number) {
      this.day = day;
      this.qty = qty;
      this.cubage = cubage;
      this.weight = weight;
    }
  }
  
  // Define the MockData class
  export class MockData {
    items: Item[];
    returnedTotal: number;
    total: number;
    static Items: any;
    static items: any;
  
    constructor(items: Item[], returnedTotal: number, total: number) {
      this.items = items;
      this.returnedTotal = returnedTotal;
      this.total = total;
    }
  }
  
  // Export the mock data instance
  export const mockData = new MockData(
    [
      new Item("SEG", 7829, 599.459, 65179.6432),
      new Item("TER", 5708, 512.175, 57828.8354),
      new Item("QUA", 6138, 734.9385, 107144.1802),
      new Item("QUI", 6735, 537.8954, 65028.2908),
      new Item("SEX", 6120, 542.3979, 65793.394),
    ],
    5,
    0
  );
  