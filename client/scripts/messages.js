// model where we storage messages that we get back

var Messages = {
  // a data variable points to an empty object
  data: [], // >> << array with 100 objs

  //add method
  add: (oneMessage, callback) => {
    Messages.data.push(oneMessage);
    // Messages.data[oneMessage.objectId] = oneMessage;
    // console.log('add', callback);
    console.log(Messages.data)
    callback(); //call MessagesView.renderMessage to render only one message
  },

  // update method, pass in (100) messages array of objs and render function as callback function
  // pass in array of 100 msg objs (data.results)
  // for of loop for arrays ES6
  update: (messages, callback) => {
    for (var oneMessage of messages) {
      oneMessage.username = oneMessage.username || '';
      oneMessage.text = oneMessage.text || '';
      oneMessage.roomname = oneMessage.roomname || '';
      Messages.data.push(oneMessage);
    }
    console.log('update', Messages.data)
    callback(); // MessagesView.render to render all
  },
};

// Object:{
//   createdAt: "2020-05-23T05:25:14.919Z"
// objectId: "HkgB6sjWCa"
// roomname: "funkyTown"
// text: "i like candy"
// updatedAt: "2020-05-23T05:25:14.919Z"
// username: "anonymous"
// }
