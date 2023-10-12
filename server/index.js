require('dotenv').config();

const app = require('./src/app');
const logger = require('./src/util/logger');
const {
    PUBLIC_PORT,
} = process.env;

const application = app();
const PORT = process.env.PORT || process.env.PUBLIC_PORT || 8080;
application.app.listen(PORT, () => {
    logger.info(`Server is up on port ${PORT}`);
});