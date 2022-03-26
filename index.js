// Your code here
function createEmployeeRecord(record){
    return {
        firstName:record[0],
        familyName:record[1],
        title:record[2],
        payPerHour:record[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    

}
function createEmployeeRecords(employeeData){
    return employeeData.map(function(record){
        return createEmployeeRecord(record)

    })

}
function createTimeInEvent(employee,dateStamp){

    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee


}
function createTimeOutEvent(employee,dateStamp){

    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee

}