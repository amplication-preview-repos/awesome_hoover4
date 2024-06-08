/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserProfile as PrismaUserProfile,
  Experience as PrismaExperience,
  Project as PrismaProject,
  SocialLink as PrismaSocialLink,
} from "@prisma/client";

export class UserProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserProfileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userProfile.count(args);
  }

  async userProfiles<T extends Prisma.UserProfileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserProfileFindManyArgs>
  ): Promise<PrismaUserProfile[]> {
    return this.prisma.userProfile.findMany<Prisma.UserProfileFindManyArgs>(
      args
    );
  }
  async userProfile<T extends Prisma.UserProfileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserProfileFindUniqueArgs>
  ): Promise<PrismaUserProfile | null> {
    return this.prisma.userProfile.findUnique(args);
  }
  async createUserProfile<T extends Prisma.UserProfileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserProfileCreateArgs>
  ): Promise<PrismaUserProfile> {
    return this.prisma.userProfile.create<T>(args);
  }
  async updateUserProfile<T extends Prisma.UserProfileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserProfileUpdateArgs>
  ): Promise<PrismaUserProfile> {
    return this.prisma.userProfile.update<T>(args);
  }
  async deleteUserProfile<T extends Prisma.UserProfileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserProfileDeleteArgs>
  ): Promise<PrismaUserProfile> {
    return this.prisma.userProfile.delete(args);
  }

  async findExperiences(
    parentId: string,
    args: Prisma.ExperienceFindManyArgs
  ): Promise<PrismaExperience[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .experiences(args);
  }

  async findProjects(
    parentId: string,
    args: Prisma.ProjectFindManyArgs
  ): Promise<PrismaProject[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .projects(args);
  }

  async findSocialLinks(
    parentId: string,
    args: Prisma.SocialLinkFindManyArgs
  ): Promise<PrismaSocialLink[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .socialLinks(args);
  }
}