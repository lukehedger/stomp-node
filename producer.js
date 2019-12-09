const stomp = require("stompit");

stomp.connect(
  {
    host: "0.0.0.0",
    port: 61613,
    connectHeaders: {
      login: "admin",
      passcode: "admin"
    }
  },
  (error, client) => {
    if (error) {
      console.error(error);

      return;
    }

    const frame = client.send({
      destination: "/queue/test",
      "content-type": "text/plain"
    });

    frame.write("hello");

    frame.end();

    client.disconnect();
  }
);
