import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServicesService } from "./services.service";
import { ServicesControllerBase } from "./base/services.controller.base";

@swagger.ApiTags("services")
@common.Controller("services")
export class ServicesController extends ServicesControllerBase {
  constructor(
    protected readonly service: ServicesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}