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
import { MessagesService } from "../messages.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MessagesCreateInput } from "./MessagesCreateInput";
import { Messages } from "./Messages";
import { MessagesFindManyArgs } from "./MessagesFindManyArgs";
import { MessagesWhereUniqueInput } from "./MessagesWhereUniqueInput";
import { MessagesUpdateInput } from "./MessagesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MessagesControllerBase {
  constructor(
    protected readonly service: MessagesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Messages })
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMessages(
    @common.Body() data: MessagesCreateInput
  ): Promise<Messages> {
    return await this.service.createMessages({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        receiverId: true,
        senderId: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Messages] })
  @ApiNestedQuery(MessagesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async messagesItems(@common.Req() request: Request): Promise<Messages[]> {
    const args = plainToClass(MessagesFindManyArgs, request.query);
    return this.service.messagesItems({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        receiverId: true,
        senderId: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Messages })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async messages(
    @common.Param() params: MessagesWhereUniqueInput
  ): Promise<Messages | null> {
    const result = await this.service.messages({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        receiverId: true,
        senderId: true,
        timestamp: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Messages })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMessages(
    @common.Param() params: MessagesWhereUniqueInput,
    @common.Body() data: MessagesUpdateInput
  ): Promise<Messages | null> {
    try {
      return await this.service.updateMessages({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          receiverId: true,
          senderId: true,
          timestamp: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Messages })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Messages",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMessages(
    @common.Param() params: MessagesWhereUniqueInput
  ): Promise<Messages | null> {
    try {
      return await this.service.deleteMessages({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          receiverId: true,
          senderId: true,
          timestamp: true,
          updatedAt: true,
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
