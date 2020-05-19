import { Mobile } from './Mobile'

export class MobileLibrary{
    private name: string
    private location: string
    private mobiles: Mobile[]
    private totalPrice: number
    constructor(name: string, location: string, mobiles: Mobile[]){
        this.name = name
        this.location = location
        this.mobiles = mobiles
        this.totalPrice = this.totalPriceCalculation()
    }
    public printAll(){
        let text = 'This are all my mobiles: \n' + this.printMobiles() + '\nPrice overall: ' + this.totalPrice
        console.log(text);  
    }
    private printMobiles(){
        let text: string = '';
        for (let i = 0; i < this.mobiles.length; i++){
             text += this.mobiles[i].print();
        }
        return text;
    }
    private totalPriceCalculation():number{
        let total: number = 0;
        for (let i = 0; i < this.mobiles.length; i++){
            total += this.mobiles[i].getPrice()
        }
        return total;
    }
    public getName(): string{
        return this.name
    }
    public setName(name:string ){
        this.name = name
    }
    public getLocation():string{
        return this.location
    }
    public setLocation(location:string){
        this.location = location
    }
    public getMobiles():Mobile[]{
        return this.mobiles
    }
    public setMobiles(mobiles: Mobile[]){
        this.mobiles = mobiles
    }
    public getTotalPrice():number{
        return this.totalPrice
    }
    public setTotalPrice(totalPrice: number){
        this.totalPrice = totalPrice
    }
}

let Nokia: Mobile = new Mobile('Nokia', '3210', 'NK', 64, 'blue', false, 2, 100);
let iPhone: Mobile = new Mobile('iPhone', '3G', 'AAPL', 128, 'black', true, 3, 500);
let Samsung: Mobile = new Mobile('Samsung', 'Galaxy 10', 'Smsng', 64, 'withe', true, 1, 300);

let lib1: MobileLibrary = new MobileLibrary('libreiria 1', 'Spain', [Nokia, iPhone, Samsung])

// console.log(lib1.getTotalPrice());
lib1.printAll();
 

