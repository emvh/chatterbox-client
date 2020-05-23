//model where we storage messages that we get back

var Messages = {
  // a data variable points to an empty object
  data: {}, //>>> key value pair   key: value

  //add method

  //update method, pass in message and render function as callback function
  update: (messages, callback) => {
    for (var oneMessage of messages) {
      Messages.data[oneMessage.objectId] = oneMessage;
    }
    callback(Messages.data); // renderMessageView
  }

};

// Object:{
//   createdAt: "2020-05-23T05:25:14.919Z"
// objectId: "HkgB6sjWCa"
// roomname: "funkyTown"
// text: "i like candy"
// updatedAt: "2020-05-23T05:25:14.919Z"
// username: "anonymous"
// }
