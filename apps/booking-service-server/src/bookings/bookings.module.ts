import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BookingsModuleBase } from "./base/bookings.module.base";
import { BookingsService } from "./bookings.service";
import { BookingsController } from "./bookings.controller";
import { BookingsResolver } from "./bookings.resolver";

@Module({
  imports: [BookingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [BookingsController],
  providers: [BookingsService, BookingsResolver],
  exports: [BookingsService],
})
export class BookingsModule {}
