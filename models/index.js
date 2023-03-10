const dbConfig = require('../config/db.config.js');

const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;

(async () => {
    try {
        await db.mongoose.connect(db.url,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            );
        console.log("Connected to the database!");
    } catch (err) {
        console.log("Cannot connect to the database!", err);
        process.exit();
    }
})();

db.users = require("./user.model.js")(mongoose);
db.missions = require("./mission.model.js")(mongoose);
db.quizzes = require("./quizz.model.js")(mongoose);
db.avatars = require("./avatar.model.js")(mongoose);
db.levels = require("./level.model.js")(mongoose);

module.exports = db;