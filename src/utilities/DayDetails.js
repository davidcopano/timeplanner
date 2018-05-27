export class Details {
    constructor(date) {
        this.date = date;
    }

    setDate(date) {
        this.date = date;
    }

    getDayDetails() {
        if (localStorage.days) {
            let days = JSON.parse(localStorage.days);
            let returnedDays = [];
            for (let i = 0; i < days.length; i++) {
                if (this.formatDate() === this.formatExternalDate(days[i].date)) {
                    returnedDays.push(days[i]);
                }
            }

            return returnedDays;
        }
    }

    addDayDetails(details) {
        // localStorage no permite objetos a pelo
        // convertimos a cadena
        if (localStorage.days) {
            let days = JSON.parse(localStorage.days);
            details.date = this.formatDate();
            days.push(details);
            localStorage.days = JSON.stringify(days);
        }
    }

    formatDate() {
        return this.date.getFullYear() + '-' + this.date.getMonth() + '-' + this.date.getDate();
    }

    formatExternalDate(date) {
        date = new Date();
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    }
}