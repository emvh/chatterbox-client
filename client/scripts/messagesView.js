//viewer

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  // renders the 100 messages from the message array
  render: function() {
    //append our message to $chats
    // console.log(Messages.data);
    //create html template

    // data = { 11111: {} }

    for (var i = 0; i < Messages.data.length; i++) {
      // console.log(Messages.data[key])
      var msg = MessageView.render(Messages.data[i]);//template
      MessagesView.$chats.append(msg);

      // console.log('rendermsg2', renderMsg);
      // MessagesView.renderMessage(Messages.data[key]);

    }

    //use template from messageView
  },

  // renders 1 message object
  renderMessage: function (message) {
    console.log('rendermsg', message);

    var renderMsg = MessageView.render(message); //create html template

    console.log('rendermsg2', renderMsg);

    MessagesView.$chats.prepend(renderMsg);
  },

};

