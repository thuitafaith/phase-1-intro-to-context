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
function createTimeInEvent(employee,date){

    


}
