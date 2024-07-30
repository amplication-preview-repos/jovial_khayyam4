/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Bookings } from "./Bookings";
import { BookingsCountArgs } from "./BookingsCountArgs";
import { BookingsFindManyArgs } from "./BookingsFindManyArgs";
import { BookingsFindUniqueArgs } from "./BookingsFindUniqueArgs";
import { CreateBookingsArgs } from "./CreateBookingsArgs";
import { UpdateBookingsArgs } from "./UpdateBookingsArgs";
import { DeleteBookingsArgs } from "./DeleteBookingsArgs";
import { Services } from "../../services/base/Services";
import { User } from "../../user/base/User";
import { BookingsService } from "../bookings.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Bookings)
export class BookingsResolverBase {
  constructor(
    protected readonly service: BookingsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bookings",
    action: "read",
    possession: "any",
  })
  async _bookingsItemsMeta(
    @graphql.Args() args: BookingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Bookings])
  @nestAccessControl.UseRoles({
    resource: "Bookings",
    action: "read",
    possession: "any",
  })
  async bookingsItems(
    @graphql.Args() args: BookingsFindManyArgs
  ): Promise<Bookings[]> {
    return this.service.bookingsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bookings, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bookings",
    action: "read",
    possession: "own",
  })
  async bookings(
    @graphql.Args() args: BookingsFindUniqueArgs
  ): Promise<Bookings | null> {
    const result = await this.service.bookings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bookings)
  @nestAccessControl.UseRoles({
    resource: "Bookings",
    action: "create",
    possession: "any",
  })
  async createBookings(
    @graphql.Args() args: CreateBookingsArgs
  ): Promise<Bookings> {
    return await this.service.createBookings({
      ...args,
      data: {
        ...args.data,

        service: args.data.service
          ? {
              connect: args.data.service,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bookings)
  @nestAccessControl.UseRoles({
    resource: "Bookings",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @graphql.Args() args: UpdateBookingsArgs
  ): Promise<Bookings | null> {
    try {
      return await this.service.updateBookings({
        ...args,
        data: {
          ...args.data,

          service: args.data.service
            ? {
                connect: args.data.service,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bookings)
  @nestAccessControl.UseRoles({
    resource: "Bookings",
    action: "delete",
    possession: "any",
  })
  async deleteBookings(
    @graphql.Args() args: DeleteBookingsArgs
  ): Promise<Bookings | null> {
    try {
      return await this.service.deleteBookings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Services, {
    nullable: true,
    name: "service",
  })
  @nestAccessControl.UseRoles({
    resource: "Services",
    action: "read",
    possession: "any",
  })
  async getService(
    @graphql.Parent() parent: Bookings
  ): Promise<Services | null> {
    const result = await this.service.getService(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Bookings): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
