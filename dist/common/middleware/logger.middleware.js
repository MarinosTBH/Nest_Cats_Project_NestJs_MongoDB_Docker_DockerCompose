"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const common_1 = require("@nestjs/common");
function logger(req, res, next) {
    common_1.Logger.log('you can pass the middleware let you in');
    next();
}
exports.logger = logger;
//# sourceMappingURL=logger.middleware.js.map