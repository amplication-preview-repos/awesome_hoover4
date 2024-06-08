import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialLinkServiceBase } from "./base/socialLink.service.base";

@Injectable()
export class SocialLinkService extends SocialLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
