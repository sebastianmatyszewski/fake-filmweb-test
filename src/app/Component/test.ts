// import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import moment from 'moment';
// import { CustomerInfoService } from "./services/customer-info.service";
// import { switchMap, catchError } from 'rxjs/operators';
// import { throwError, Subscription } from 'rxjs';

// @Component({
//   selector: 'my-app',
//   template: `<h1>Customer latest activity date
//   {{ getFormattedDate() }}</h1>`,
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit, OnDestroy{

//   latestActivityDate!: string; 
//   @Input() userId: string = ""; 
//   private subscription: Subscription = new Subscription();

//   constructor(private customerInfoService: CustomerInfoService) {
    
//   }
    
// ngOnInit(): void {
//     this.getData();
// }

//     getData() {
//         this.subscription = this.customerInfoService.getCustomerIPById(this.latestActivityDate)
//             .pipe(
//             switchMap((ip: number) => this.customerInfoService.getIPActivityDates(ip)),
//             catchError(error => {
//                 return throwError(error);
//             })
//             )
//             .subscribe((dates: any) => {
//                 this.latestActivityDate = dates.latestDate;
//             });
//     }

// public getFormattedDate(): string {
//     return this.formatDate(this.latestActivityDate);
// }

// isMyFibonacci(firstValue: number, secondValue: number, testValue: number): boolean {

//     if (firstValue > secondValue){
//         return false;
//     }

//     if(firstValue === testValue || secondValue === testValue){
//         return true;
//     }

//     let prev = firstValue;
//     let current = secondValue

//     while (current <= testValue){
//         if(current == testValue){
//             return true
//         }
//         const next = prev + current;
//         prev = current;
//         current = next;
//     }
//     return false
// }

// reduce(array: number[], callback : (acc: number, next: number) => number, initialValue: number): number {
//     let temp = initialValue;

//     for (const element of array){
//         temp = callback(element, temp);
//     }

//     return temp;
// }

// private formatDate(dateString: string): string {
//     if (dateString) {
//         return moment(dateString).format('HH:mm:ss');
//     } else{
//         return 'N/A'
//     }
//   }

//   ngOnDestroy(): void {
//     if(this.subscription)
//     this.subscription.unsubscribe();
// }
// }
