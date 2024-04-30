// const log4js = require('log4js');
// const dateTimeStamp = getCurrentDateTimeWithHHMM();
// let logFileName = './Logs/ExecutionLogs.log';

// log4js.configure({
//     appenders: { 
//         Logs: { 
//                 type: 'file', 
//                 filename: logFileName,
//             }
//          },
//     "layout": {
//         "type": "pattern",
//         "pattern": "[%d{yyyy-MM-dd hh:mm:ss}] [%p] %c - %m%n"
//     },
//     categories: { default: { appenders: ['Logs'], level: 'info' } }
// });

//const logger = log4js.getLogger();

export function logAction(message: string) {
    cy.task('log', "Action: " + message);
    console.log("ACTION: " + message);
    //logger.info("ACTION: " + message);
}

export function logVerification(message: string) {
    cy.task('log', message);
    console.log(message);
    //logger.info(message);
}
export function errorLog(message: string) {
    cy.task('log', 'ERROR: ' + message);
    console.log('ERROR: ' + message);
    //logger.error('ERROR: ' + message);
}
export function consoleLog(message: string) {
    cy.task('log', message);
    console.log("INFO: " + message);
}

export function logTestResult(message: string) {
    cy.task('log', message);
    console.log(message);
    //logger.info(message);
}


function getCurrentDateTimeWithHHMM(): string {
    const now = new Date();
    
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedDateTime = `${day}_${month}_${year}_${hours}_${minutes}_${seconds}`;
    return formattedDateTime;
  }