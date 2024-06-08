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
  Experience as PrismaExperience,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class ExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExperienceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.experience.count(args);
  }

  async experiences<T extends Prisma.ExperienceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExperienceFindManyArgs>
  ): Promise<PrismaExperience[]> {
    return this.prisma.experience.findMany<Prisma.ExperienceFindManyArgs>(args);
  }
  async experience<T extends Prisma.ExperienceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExperienceFindUniqueArgs>
  ): Promise<PrismaExperience | null> {
    return this.prisma.experience.findUnique(args);
  }
  async createExperience<T extends Prisma.ExperienceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExperienceCreateArgs>
  ): Promise<PrismaExperience> {
    return this.prisma.experience.create<T>(args);
  }
  async updateExperience<T extends Prisma.ExperienceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExperienceUpdateArgs>
  ): Promise<PrismaExperience> {
    return this.prisma.experience.update<T>(args);
  }
  async deleteExperience<T extends Prisma.ExperienceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ExperienceDeleteArgs>
  ): Promise<PrismaExperience> {
    return this.prisma.experience.delete(args);
  }

  async getUserProfile(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.experience
      .findUnique({
        where: { id: parentId },
      })
      .userProfile();
  }
}