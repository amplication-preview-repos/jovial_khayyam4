import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NotificationsService } from "./notifications.service";
import { NotificationsControllerBase } from "./base/notifications.controller.base";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationsController extends NotificationsControllerBase {
  constructor(
    protected readonly service: NotificationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
