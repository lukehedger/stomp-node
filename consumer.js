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

    client.subscribe(
      { destination: "/queue/test", ack: "auto" },
      (error, message) => {
        if (error) {
          console.error(error);

          return;
        }

        message.readString("utf-8", (error, body) => {
          if (error) {
            console.error(error);

            return;
          }

          console.log("received message: " + body);
        });
      }
    );
  }
);
