import { Component } from '@angular/core';
import { CrisisArea } from '../interfaces/crisis-area';
import { RegistryEntry } from '../interfaces/registry-entry';
import { OfficeData } from '../data/office-data';
import { CrisisAreaData } from '../data/crisis-area-data';
import { Office } from '../interfaces/office';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registry-page',
  templateUrl: './registry-page.component.html',
  styleUrls: ['./registry-page.component.css'],
  providers: [CrisisAreaData, OfficeData],
})

export class RegistryPageComponent {
  public crisisAreas: CrisisArea[];
  public office: Office;
  public registryEntry: RegistryEntry;

  public constructor(crisisAreaData: CrisisAreaData, officeData: OfficeData, private router: Router) {
    this.crisisAreas = crisisAreaData.getCrisisAreas();
    this.office = officeData.getOfficeData();
    this.registryEntry = {
      Pickup: "pickup",
      Name: "",
      Adress: "",
      Plz: undefined,
      City: "",
      CrisisArea: 'default',
      ClothingType: "default",
    };
  }

  /**
   * Blendet die notwendigen Adressfelder ein, falls die Abholung ausgewählt ist
   * @param event Das Event welches die Änderung auslöst
   */
  public pickupSelectionChanged(event: any): void {
    let adressContainer = document.getElementById('adressContainer');
    if (event.target.value != null && event.target.value == 'personal') {
      if (adressContainer != null) {
        adressContainer.hidden = true;
      }
    }
    else if (event.target.value != null && event.target.value == 'pickup') {
      if (adressContainer != null) {
        adressContainer.hidden = false;
      }
    }
  }

/**
 * Wenn der Nutzer den Button zum Abschließen der Registrierung drückt
 */
  public onSubmit() {
    if(this.validate()){
      this.router.navigate(['/registry-complete',{registry:JSON.stringify(this.registryEntry)}])
    }
  }

  /**
   * Prüft ob alle Eingaben valide sind, ggf. Fehlermeldung per alert
   * @returns true wenn Prüfung erfolgreich, sonst false
   */
  private validate(): boolean {
    if (this.registryEntry.Pickup == 'pickup') {
      if (this.registryEntry.Name == ""
        || this.registryEntry.Adress == ""
        || this.registryEntry.Plz == 0
        || this.registryEntry.City == "") {
        alert("Bitte alle Adressangaben vollständig ausfüllen");
        return false;
      }
      else if (!this.checkPlzIsInShopArea()) {
        alert("Ihre Adresse befindet sich nicht im Abholbereich unserer Geschäftsstelle");
        return false;
      }
    }
    if(this.registryEntry.ClothingType=="default"){
      alert("Bitte geben Sie die Art der Kleidung an");
        return false;
    }
    if(this.registryEntry.CrisisArea=="default"){
      alert("Bitte wählen Sie das Kriesengebiet, in welches Sie spenden möchten");
        return false;
    }
    return true;
  }

  /**
   * Prüft ob die ersten beiden Stellen der Postleitzahl mit denen der Geschäftsstelle übereinstimmt.
   * @returns true bei Übereinstimmung, sonst false
   */
  private checkPlzIsInShopArea(): boolean {
    const plzElement = document.getElementById('inputPostalCode') as HTMLInputElement;
    if (plzElement != null) {
      if (plzElement.value.toString().substring(0, 2) == this.office.Plz.toString().substring(0, 2)) {
        return true;
      }
    }
    return false;
  }

ngOnInit(){

}

}

