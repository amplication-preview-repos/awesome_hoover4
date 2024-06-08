import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SocialLinkResolverBase } from "./base/socialLink.resolver.base";
import { SocialLink } from "./base/SocialLink";
import { SocialLinkService } from "./socialLink.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SocialLink)
export class SocialLinkResolver extends SocialLinkResolverBase {
  constructor(
    protected readonly service: SocialLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
