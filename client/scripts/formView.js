var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },
  // //var message = {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan'
  // };
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //get our message from $form
    var text = $('#message').val();

    //build our object data to send to the server
    var username = App.username;
    var messageObj = {
      username: username,
      text: text,
      roomname: `emily's room`
    };
    //call parse.create to send a post request
    // Parse.create(message, Messages.add));
    console.log('handle submit', messageObj);

    Parse.create(messageObj, (data)=>{
      console.log('data from post request:', data);
      _.extend(messageObj, data);
      console.log('parse.create data: ', messageObj);

      Messages.add(messageObj, () => {
        MessagesView.render();
      });
      // callback();
    });

    //invoke callback to add our new message

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};