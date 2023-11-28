$(document).ready(function () {
  $('.button').on('click', function () {
    var targetGroup = $(this).data('target');
    
    // Hide all groups
    $('.group1, .group2, .group3').hide();
    
    // Show the selected group
    $('.' + targetGroup).show();
  });
});