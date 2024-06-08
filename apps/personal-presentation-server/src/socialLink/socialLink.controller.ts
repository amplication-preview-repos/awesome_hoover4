import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SocialLinkService } from "./socialLink.service";
import { SocialLinkControllerBase } from "./base/socialLink.controller.base";

@swagger.ApiTags("socialLinks")
@common.Controller("socialLinks")
export class SocialLinkController extends SocialLinkControllerBase {
  constructor(
    protected readonly service: SocialLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
