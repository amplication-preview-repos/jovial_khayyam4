import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MessagesService } from "./messages.service";
import { MessagesControllerBase } from "./base/messages.controller.base";

@swagger.ApiTags("messages")
@common.Controller("messages")
export class MessagesController extends MessagesControllerBase {
  constructor(
    protected readonly service: MessagesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
