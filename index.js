import { format, intervalToDuration } from 'date-fns';

const dateInput = document.getElementById('input');
const dateOutput = document.getElementById('output-container');

function getDateDifference() {
  try {
    const futureDate = new Date(dateInput.value);
    const currentDate = new Date();
    const formatedCurrentDate = format(currentDate, 'dd MMM yyyy HH:mm');
    const formatedFutureDate = format(futureDate, 'dd MMM yyyy HH:mm');

    if (futureDate < currentDate) {
      alert('This date is already in past');
      dateOutput.textContent = '0 years, 0 months, 0 days and 0 hours left';
      dateInput.value = '';
    } else {
      const dateDifference = intervalToDuration({ start: futureDate, end: currentDate });
      const { years, months, days, hours, minutes } = dateDifference;
      dateOutput.innerText = `From: ${formatedCurrentDate} 
      To: ${formatedFutureDate} 
      Left: ${years} years, ${months} months, ${days} days, ${hours} hours and ${minutes} minutes`;
      dateInput.value = '';
    }
  } catch (error) {
    alert(error);
    dateInput.value = '';
  }
}

dateInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    getDateDifference();
  }
});
