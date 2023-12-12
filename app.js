$(document).ready(function() {
  // Get the current date and time using Day.js
  const currentDate = dayjs();
  const currentHour = currentDate.hour();

  // Target the container for timeblocks
  const timeblocksContainer = $('#timeblock');

  // Define business hours (adjust as needed)
  const businessHours = {
    start: 0, // 9 AM
    end: 24, // 5 PM
  };

  // Loop through each hour to dynamically generate timeblocks
  for (let hour = businessHours.start; hour <= businessHours.end; hour++) {
    // Create a new timeblock element
    const timeblock = $('<div>').addClass('timeblock').attr('data-hour', hour);

    // Create a div for the hour
    const hourDiv = $('<div>').addClass('hour').text(formatHour(hour));

    // Create a textarea for user input
    const textarea = $('<textarea>');

    // Create a save button
    const saveBtn = $('<button>').addClass('saveBtn').html('<i class="fas fa-save"></i>');

    // Append elements to the timeblock
    timeblock.append(hourDiv, textarea, saveBtn);

    // Append the timeblock to the container
    timeblocksContainer.append(timeblock);

    // Color-code each timeblock based on past, present, and future
    if (hour < currentHour) {
      timeblock.addClass('past');
    } else if (hour === currentHour) {
      timeblock.addClass('present');
    } else {
      timeblock.addClass('future');
    }
  }

  // Function to format hour for display
  function formatHour(hour) {
    return dayjs().hour(hour).format('HH A');
  }

  // Event listener for user input (example: logging the value)
  $('.timeblock').on('click', function() {
    const userText = $(this).find('textarea').val();
    console.log(`User entered: ${userText} for hour ${$(this).data('hour')}`);
  });
});