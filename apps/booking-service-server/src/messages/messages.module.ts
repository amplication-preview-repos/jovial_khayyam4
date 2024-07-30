import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MessagesModuleBase } from "./base/messages.module.base";
import { MessagesService } from "./messages.service";
import { MessagesController } from "./messages.controller";
import { MessagesResolver } from "./messages.resolver";

@Module({
  imports: [MessagesModuleBase, forwardRef(() => AuthModule)],
  controllers: [MessagesController],
  providers: [MessagesService, MessagesResolver],
  exports: [MessagesService],
})
export class MessagesModule {}
