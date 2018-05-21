export class Details {
    constructor(date) {
        this.date = date;
    }

    getDayDetails() {
        if (localStorage.days) {
            let days = JSON.parse(localStorage.days);
            for (let i = 0; i < days.length; i++) {
                if (days[i].date === this.date) {
                    return days[i].details;
                }
            }

            return [];
        }
        else {
            localStorage.days = JSON.stringify([]);
            return [];
        }
    }

    addDayDetails(details) {
        // localStorage no permite objetos a pelo
        // convertimos a cadena
        if (localStorage.days) {
            let days = JSON.parse(localStorage.days);
            details.date = this.date;
            days.push(details);
            localStorage.days = JSON.stringify(days);
        }
        else {
            details = JSON.stringify(details);
            localStorage.days = details;
        }
    }
}