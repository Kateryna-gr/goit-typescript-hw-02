/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  monday = 1,
  tuesday = 2,
  wednesdsy = 3,
  thursday = 4,
  friday = 5,
  suturday = 6,
  sunday = 7,
}

function isWeekend(day: DayOfWeek) {
  if (day === 6 || day === 7) {
    return true;
  } else return false;
}
