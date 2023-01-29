import { CrisisArea } from "../interfaces/crisis-area";

export class CrisisAreaData{
    private crisisAreas: CrisisArea[] =[{
        Id: 0,
        Name: "Uganda",
    },{
        Id: 1,
        Name: "Äthiopien",
    },{
        Id: 2,
        Name: "Ukraine",
    },{
        Id: 3,
        Name: "Myanmar",
    },{
        Id: 4,
        Name: "Haiti",
    },{
        Id: 5,
        Name: "Jemen",
    },{
        Id: 6,
        Name: "Nigeria",
    },{
        Id: 7,
        Name: "Kongo",
    },{
        Id: 8,
        Name: "Burkina Faso",
    },{
        Id: 9,
        Name: "Sierra Leone",
    },{
        Id: 10,
        Name: "Sudan",
    },{
        Id: 11,
        Name: "Senegal",
    },{
        Id: 12,
        Name: "Mali",
    },{
        Id: 13,
        Name: "Elfenbeinküste",
    },{
        Id: 14,
        Name: "Kenia",
    },{
        Id: 15,
        Name: "Guinea",
    },{
        Id: 16,
        Name: "Mosambik",
    }];

    public getCrisisAreas():CrisisArea[]{
        return this.crisisAreas;
    }
}