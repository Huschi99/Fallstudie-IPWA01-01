import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryEntry } from '../interfaces/registry-entry';

@Component({
  selector: 'app-registry-complete',
  templateUrl: './registry-complete.component.html',
  styleUrls: ['./registry-complete.component.css']
})
export class RegistryCompleteComponent {
  public registryConclusion: any;
  public pickupDate: Date;

  constructor(private route: ActivatedRoute) {
    this.pickupDate = new Date();
    let param = this.route.snapshot.paramMap.get('registry');
    if (param != null) {
      this.registryConclusion = JSON.parse(param.toString());
    }
  }
  ngOnInit() {
    //Abholdatum nächster Werktag
    this.pickupDate.setDate(this.pickupDate.getDate() + 1);
    //Falls das Datum der Abholung auf einen Samstag oder Sonntag fällt
    if(this.pickupDate.getDay() > 5){
      this.pickupDate.setDate(this.pickupDate.getDate() + 2 )
    }
    else if(this.pickupDate.getDay() > 6){
      this.pickupDate.setDate(this.pickupDate.getDate() + 1 )
    }
  }
}
