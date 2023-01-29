import { Office } from "../interfaces/office";


export class OfficeData{
    private office: Office = {
        Id: 1,
        OfficeName: 'Arnsberg',
        Plz: 59821,
    };

    public getOfficeData():Office{
        return this.office;
    }
}