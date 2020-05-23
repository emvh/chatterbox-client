var MessageView = {
  // render: (data) => {
  //   console.log('template', data);
  // }

  render: _.template(`
    <div class="chat">
    <div class="username"><%- username %></div>
    <div class="text"><%- text %></div>
    </div>
  `),

};
// <!-- <h1>chatterbox</h1> -->
// {/* <div class="username"><%- username %></div>
//       <div class="text"><%- text %></div> */}