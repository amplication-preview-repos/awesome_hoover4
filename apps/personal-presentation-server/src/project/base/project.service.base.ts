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
  Project as PrismaProject,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class ProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProjectCountArgs, "select">): Promise<number> {
    return this.prisma.project.count(args);
  }

  async projects<T extends Prisma.ProjectFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindManyArgs>
  ): Promise<PrismaProject[]> {
    return this.prisma.project.findMany<Prisma.ProjectFindManyArgs>(args);
  }
  async project<T extends Prisma.ProjectFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectFindUniqueArgs>
  ): Promise<PrismaProject | null> {
    return this.prisma.project.findUnique(args);
  }
  async createProject<T extends Prisma.ProjectCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectCreateArgs>
  ): Promise<PrismaProject> {
    return this.prisma.project.create<T>(args);
  }
  async updateProject<T extends Prisma.ProjectUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectUpdateArgs>
  ): Promise<PrismaProject> {
    return this.prisma.project.update<T>(args);
  }
  async deleteProject<T extends Prisma.ProjectDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectDeleteArgs>
  ): Promise<PrismaProject> {
    return this.prisma.project.delete(args);
  }

  async getUserProfile(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.project
      .findUnique({
        where: { id: parentId },
      })
      .userProfile();
  }
}
