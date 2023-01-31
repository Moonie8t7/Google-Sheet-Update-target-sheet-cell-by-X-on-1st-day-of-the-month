/**
 * @author u/IAmMoonie <https://www.reddit.com/user/IAmMoonie/>
 * @file https://www.reddit.com/r/sheets/comments/10fak5w/comment/j5eb7sc/?context=3
 * @desc The script updates the target sheet and cell by a given amount on the 1st day of the month.
 * @license MIT
 * @version 1.1
 */

/* A constant variable that stores the spreadsheet ID. */
const SPREADSPREADSHEET_ID = "your spreadsheetID goes here";

/**
 * It checks if today is the first of the month, and if it is, it increments the value in the cell
 * specified by the parameter `cellToIncrement` by the value passed in `incrementValue`
 * @param cellToIncrement - The cell you want to increment.
 * @param targetSheet - The name of the sheet you want to increment the value in.
 * @param incrementValue - The value to increment the cell by.
 */
function incrementCellValue_(cellToIncrement, targetSheet, incrementValue) {
  /* Opening the spreadsheet and getting the sheet. */
  const ss = SpreadsheetApp.openById(SPREADSPREADSHEET_ID);
  const sheet = ss.getSheetByName(targetSheet);

  /* Getting the value of the cell specified by the parameter `cellToIncrement` and storing it in the
  variable `currentValue`. */
  const currentValue = sheet.getRange(cellToIncrement).getValue();

  /* Checking if today is the first of the month. If it is, it will increment the value in the
    cell specified by the parameter `cellToIncrement` by the value passed in `incrementValue`. */
  const today = new Date();
  if (today.getDate() === 1) {
    sheet.getRange(cellToIncrement).setValue(currentValue + incrementValue);
    SpreadsheetApp.flush();
  }
}

/**
 * It increments the value of a cell by a specified amount.
 * @example
 * // updates Sheet1, cell A1 by 100
 * incrementCellValue_("A1", "Sheet1", 100)
 * @example
 * // updates Sheet2, cell B6 by 1
 * incrementCellValue_("B6", "Sheet2", 1);
 */
function monthlyUpdates() {
  incrementCellValue_("A1", "Sheet1", 100);
  incrementCellValue_("B6", "Sheet2", 1);
}
