'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require('@nestjs/common');
var app_controller_1 = require('./app.controller');
var app_service_1 = require('./app.service');
var typeorm_1 = require('@nestjs/typeorm');
var usertbl_entity_1 = require('./users/usertbl.entity');
var users_module_1 = require('./users/users.module');
var rfid_entity_1 = require('./rfid/rfid.entity');
var rfid_module_1 = require('./rfid/rfid.module');
var lost_module_1 = require('./lost/lost.module');
var lost_entity_1 = require('./lost/lost.entity');
var AppModule = /** @class */ (function () {
  function AppModule() {}
  AppModule = __decorate(
    [
      (0, common_1.Module)({
        imports: [
          typeorm_1.TypeOrmModule.forRoot({
            type: 'mysql',
            // host: '192.168.138.162',
            host: '192.168.0.111',
            port: 3306,
            username: 'pmt',
            password: 'pmt@1234',
            database: 'pmt_mohsin',
            entities: [
              usertbl_entity_1.usertbl,
              rfid_entity_1.rfidtbl,
              lost_entity_1.lost_historytbl,
            ],
            synchronize: true,
          }),
          users_module_1.UsersModule,
          rfid_module_1.RfidModule,
          lost_module_1.LostModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
      }),
    ],
    AppModule,
  );
  return AppModule;
})();
exports.AppModule = AppModule;
