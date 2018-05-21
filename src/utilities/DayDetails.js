export class Details {
    constructor(date) {
        this.date = date;
    }

    getDayDetails() {
        if(localStorage.days) {
            for(let i = 0; i < localStorage.days.length; i++) {
                if(localStorage.days[i].date === this.date) {
                    return localStorage.days[i].details;
                }
            }
        }
        else {
            return [];
        }
    }
}