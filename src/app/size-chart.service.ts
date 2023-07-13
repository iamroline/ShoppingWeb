import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeChartService {

  constructor() { }
  mensize(){
    return[
      {"size":"XS", "chest":17,"waist":15,"hip":20},
      {"size":"S", "chest":18,"waist":16,"hip":21},
      {"size":"M", "chest":19,"waist":17,"hip":22},
      {"size":"M", "chest":20,"waist":18,"hip":23},
      {"size":"XM", "chest":21,"waist":19,"hip":24},

    ]
  }

  womensize(){
    return[
      {"size":"XS","ptp":15,"waist":13,"hip":16},
      {"size":"S","ptp":16,"waist":14,"hip":17},
      {"size":"M","ptp":17,"waist":15,"hip":18},
      {"size":"L","ptp":18,"waist":16,"hip":19},
      {"size":"XL","ptp":19,"waist":17,"hip":20}
    ]
  }

}
