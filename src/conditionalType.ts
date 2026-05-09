//Example 01

type A=null;
type B=undefined;

type C=A extends number? true: B extends undefined? true:false; //checks if null (Type A) fits into the category of a number.

//Example 02

type RichPeoplesVehicle={
    bike:string,
    car:string,
    ship:string
}

type CheckVehicle<T>=T extends keyof RichPeoplesVehicle? true: false;
type HasBike=CheckVehicle<"tractor">;
