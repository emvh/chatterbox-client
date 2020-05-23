//viewer

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(messages) {
    //append our message to $chats
    for (var key in messages) {
      var msg = MessageView.render(messages[key]); // <div>'my name blab blah</div>
      MessagesView.$chats.append(msg);
    }
    //use template from messageView
  }

};

