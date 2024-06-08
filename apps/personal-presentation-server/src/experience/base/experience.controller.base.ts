/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ExperienceService } from "../experience.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ExperienceCreateInput } from "./ExperienceCreateInput";
import { Experience } from "./Experience";
import { ExperienceFindManyArgs } from "./ExperienceFindManyArgs";
import { ExperienceWhereUniqueInput } from "./ExperienceWhereUniqueInput";
import { ExperienceUpdateInput } from "./ExperienceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ExperienceControllerBase {
  constructor(
    protected readonly service: ExperienceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Experience })
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createExperience(
    @common.Body() data: ExperienceCreateInput
  ): Promise<Experience> {
    return await this.service.createExperience({
      data: {
        ...data,

        userProfile: data.userProfile
          ? {
              connect: data.userProfile,
            }
          : undefined,
      },
      select: {
        company: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        title: true,
        updatedAt: true,

        userProfile: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Experience] })
  @ApiNestedQuery(ExperienceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async experiences(@common.Req() request: Request): Promise<Experience[]> {
    const args = plainToClass(ExperienceFindManyArgs, request.query);
    return this.service.experiences({
      ...args,
      select: {
        company: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        title: true,
        updatedAt: true,

        userProfile: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async experience(
    @common.Param() params: ExperienceWhereUniqueInput
  ): Promise<Experience | null> {
    const result = await this.service.experience({
      where: params,
      select: {
        company: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        title: true,
        updatedAt: true,

        userProfile: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateExperience(
    @common.Param() params: ExperienceWhereUniqueInput,
    @common.Body() data: ExperienceUpdateInput
  ): Promise<Experience | null> {
    try {
      return await this.service.updateExperience({
        where: params,
        data: {
          ...data,

          userProfile: data.userProfile
            ? {
                connect: data.userProfile,
              }
            : undefined,
        },
        select: {
          company: true,
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          title: true,
          updatedAt: true,

          userProfile: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Experience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Experience",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteExperience(
    @common.Param() params: ExperienceWhereUniqueInput
  ): Promise<Experience | null> {
    try {
      return await this.service.deleteExperience({
        where: params,
        select: {
          company: true,
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          title: true,
          updatedAt: true,

          userProfile: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
