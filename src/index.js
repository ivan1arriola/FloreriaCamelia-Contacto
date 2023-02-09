const { PORT } = require("./config");
const app = require("./app");
require("./database");


app.listen(PORT, () => {
    console.log(`------------Server on port ${PORT} ------------`);
});