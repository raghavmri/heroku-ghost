const { exec } = require("child_process");
exec(
  "bin/alter-auth-method && bash bin/cloudinary.sh && bash bin/themes.sh",
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      console.log(stdout);
    }
  }
);
