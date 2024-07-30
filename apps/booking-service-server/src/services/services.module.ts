import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServicesModuleBase } from "./base/services.module.base";
import { ServicesService } from "./services.service";
import { ServicesController } from "./services.controller";
import { ServicesResolver } from "./services.resolver";

@Module({
  imports: [ServicesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServicesController],
  providers: [ServicesService, ServicesResolver],
  exports: [ServicesService],
})
export class ServicesModule {}
