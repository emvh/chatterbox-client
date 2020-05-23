var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: Parse.server, // the URL to which the request is sent
      type: 'POST', // an alias for method
      data: JSON.stringify(message),
      /* Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the traditional setting (described below) */
      contentType: 'application/json',
      success: function(data) {
        successCB(data);
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB, // function(data) {do something about data} << our callback function
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};


// Ajax is a technology that allows developers to make asynchronous HTTP requests without the need for a full page refresh.
// successCB: A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter or the dataFilter callback function, if specified; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object.