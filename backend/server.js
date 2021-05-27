const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors')                
const helmet = require('helmet');
const users = require("./routes/api/users");
const exercisesRouter = require('./routes/guestDeatailsRouter');
const RdateRouter = require('./routes/dates');
const path = require('path');
const reservationRouter = require('./routes/reservationRouter');
const slotRouter = require('./routes/slotRouter');
const packagenoRouter = require('./routes/packageNoRouter');
const packageRouter = require('./routes/packageDescriptionRouter');
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
app.use(helmet());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useUnifiedTopology : true,
      useNewUrlParser : true,
      useFindAndModify: false,
      useCreateIndex: true

    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes

//login
app.use("/api/users", users);
app.use('/exercises',exercisesRouter);


//guest deatails
app.use('/reservations', reservationRouter);

//date
app.use('/rdate',RdateRouter);
app.use('/slots', slotRouter);

//package
app.use('/packageno',packagenoRouter);
app.use('/package',packageRouter);




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
