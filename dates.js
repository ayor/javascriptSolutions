// JavaScript source code

function ResumptionDate() {
    // get employeeType
    var el = document.getElementsByTagName('select');

    //get start date 
   var startDate = moment(new Date(document.getElementById("startDate").value));
//    console.log(startDate)
    //get number of leave days 
    var leaveDays = +(document.getElementById("leaveDays").value);
    console.log(leaveDays);
    //officeEmployee return date 
    var isOfficeReturnDate = startDate;
    console.log(isOfficeReturnDate)

    //field Employee return date
    var isFieldReturnDate = startDate;
    console.log(isFieldReturnDate)
    
    //if employee type is office employee
    if (el[0].value == 'Office') {

        while (leaveDays) {
           // console.log(leaveDays)
            //check if day is a weekend or a public holiday
            if (isWeekend(isOfficeReturnDate) || isPublicHoliday(isOfficeReturnDate)) {
                isOfficeReturnDate = moment(isOfficeReturnDate).add(1, 'days');
            } else {
                isOfficeReturnDate = moment(isOfficeReturnDate).add(1, 'days');
                leaveDays--;
            }
            console.log(ResumptionDate)
        }
        //check if resuption date is a weekend or a public holiday 
        getEndDate(isOfficeReturnDate);

        //print resumption date
        document.getElementById('output').innerHTML = `Resumption Date is ${getEndDate(isOfficeReturnDate)}`;
    }
    else  {
        console.log(isFieldReturnDate)
        document.getElementById("output").innerHTML = `Resumption date is   ${isFieldReturnDate.add((leaveDays-1), 'days')}`;
    }
}
//function to check if the date is a public holiday 
function isPublicHoliday(date) {

    var publicHoliays = ["2019-01-01", "2019-01-21", "2019-02-15", "2019-02-22", "2019-04-19", "2019-04-22", "2019-05-01", "2019-05-27", "2019-06-05", "2019-06-12", "2019-08-12", "2019-10-01", "2019-12-22", "2019-12-25", "2019-12-26"]

    publicDate = publicHoliays.indexOf(date)

    if (publicDate != -1) {
        return date;
    }

}
//functionc to get check if date is a weekend
function isWeekend(date) {

    getDay = moment(date).day();

    //check if date is a weekend
    if (getDay == 0 || getDay == 6) {
        return date;
    }
}

//function to check is the return date is a weekend 

function getEndDate(date) {
  
        if (isPublicHoliday(date) || isWeekend(date)) {

            date = moment(date).add(1, 'days');
            
            return getEndDate(date);

        } else {

            return (date);
        }    
}