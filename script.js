$(document).ready(function () {
  // Save button
  $(".btn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id");
    localStorage.setItem(taskTime, description);
  });
  // calls upon the saved data
  function taskHistory() {
    $(".time-block").each(function () {
      var timeID = $(this).attr("id");
      console.log(timeID);
      $(`#${timeID} .description`).text(localStorage.getItem(timeID));
    });
  }
  // updates the color of the backgrounds according to the current time
  function updateDisplay() {
    $(".time-block").each(function () {
      var currentHour = dayjs().format("H");
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  taskHistory();
  updateDisplay();
  console.log(dayjs().format("H"));
  // displays the current date
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
