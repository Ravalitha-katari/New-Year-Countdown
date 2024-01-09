function newYearCountdown() {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    function updateCountdown() {
      const currentTime = new Date();
      const newYear = new Date(currentTime.getFullYear() + 1, 0, 1);
      const timeDifference = newYear - currentTime;
  
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      daysElement.textContent = days;
      hoursElement.textContent = formatTimeUnit(hours);
      minutesElement.textContent = formatTimeUnit(minutes);
      secondsElement.textContent = formatTimeUnit(seconds);
    }
  
    function formatTimeUnit(unit) {
      return unit < 10 ? `0${unit}` : unit;
    }
  
    setInterval(updateCountdown, 1000);
  }
  
  newYearCountdown();
  