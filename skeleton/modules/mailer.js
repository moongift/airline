module.exports = (options) => {
  return new Promise((res, rej) => {
    var mailer =  options.mailer.mailer;
    var transporter = options.mailer.transporter;

    class ${module_name.capitalize()} {
      constructor() {
        this.options = {
          from: '"Your name" <test@example.com>',
          subject: 'Mail subject - ${module_name}',
          text: "",
          to: "",
          html: ""
        };
      }
      
      setParams(params) {
      }
      
      send() {
        var me = this;
        return new Promise((res, rej) => {
          transporter.sendMail(me.options, (error, info) => {
            // If error,
            /*
            {
              "code": "ECONNECTION",
              "errno": "ENOTFOUND",
              "syscall": "getaddrinfo",
              "hostname": "smtp.example.com",
              "host": "smtp.example.com",
              "port": 465,
              "command": "CONN"
            }
            */
            if(error)
              return rej(error);
            // If success,
            /*
            {
              "accepted": [
                "test2@example.com"
              ],
              "rejected": [],
              "response": "250 Ok",
              "envelope": {
                "from": "test@example.com",
                "to": [
                    "test2@example.com"
                ]
              },
              "messageId": "9999999-9999-9999-9999-999999999999@example.com"
            }
            */
            res(info);
          });
        })
      }
    };
    res({${module_name.capitalize()}: ${module_name.capitalize()}});
  });
}