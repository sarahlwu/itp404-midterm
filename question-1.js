//fetching data

function getUsers() {
  var promise = $.ajax({
    url: 'http://itp-api.herokuapp.com/api/v1/me',
    type: 'get'
  });

  promise.then(function(userdata) {
    console.log(userdata);
    // var users = userdata.data;
    // console.log(users);
    var templateSource = $('#user-list-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
      // user: users
      user: userdata
    });
    $('#user-list').html(html);
  }, function() {
    console.log('Nothing found');
  });
};

// Make an AJAX call to http://itp-api.herokuapp.com/api/v1/me and render the user's first name
// and last name in a span with a class of "fullname" using Handlebars. Also render the list of
// open source projects in an unordered list. The `isAdmin` flag is a boolean that randomly changes.
// If isAdmin is true, render 'Admin' next to the name. Otherwise, just render 'Not Admin' next
// to the name.
// Dont forget to run a local server when building this.
// cd into this directory and run php -S localhost:8000 and navigate to localhost:8000/question-1.html
