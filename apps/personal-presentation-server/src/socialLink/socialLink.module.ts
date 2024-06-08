import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SocialLinkModuleBase } from "./base/socialLink.module.base";
import { SocialLinkService } from "./socialLink.service";
import { SocialLinkController } from "./socialLink.controller";
import { SocialLinkResolver } from "./socialLink.resolver";

@Module({
  imports: [SocialLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [SocialLinkController],
  providers: [SocialLinkService, SocialLinkResolver],
  exports: [SocialLinkService],
})
export class SocialLinkModule {}
