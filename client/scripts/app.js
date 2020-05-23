var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    //set inerval >> everty 10 seconds, update our messages >>call app.fetch
    // setInterval(App.fetch, 3000);
  },
  //Parse.readAll(function)
  // this is passing in a default argument if nothing is passed in
  // callbacks are good for a reason (you want this function to be ran immediately after something has happened)
  // when you deal with async functions,
  // when you fetch something it will take awhile. you are sending info to an endpoint. it passes something back & you don't know how long that will take. JS wants you to be able to handle the async nature
  // once the function declaration finishes executing, that's the end of the function invokation. so we never wait for the data to come back
  // you have to pass in a callback in the fetch
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // update model
      // this is the success callback
      // {result:[{a bunch of message},{},{}]}
      if (data.results.length === 0 || !data.results) {
        return;
      }
      // examine the response from the server request:
      console.log('entire data: ', data); // logs an object with a results property with a value equal to an array of 100 object messages


      Messages.update(data.results, MessagesView.render);

      callback();
    }
    );
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
