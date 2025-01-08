import "@typespec/http";
import "@typespec/openapi3";
import "./models.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;
using TypeSpec.Versioning;

@versioned(Versions)
@useAuth(BearerAuth)
@tag("Partners API")
@doc("Partners API provides a way to manage partners.")
@route("/partners")
namespace FinancialAPI.Partners {
  @get
  op listPartners(...CommonParameters): {
    @statusCode statusCode: 200;
    @body partners: Partner[];
  };

  @get
  op getPartner(@path partnerId: string, ...CommonParameters): {
    @statusCode statusCode: 200;
    @body partner: Partner;
  } | {
    @statusCode statusCode: 404;
    @body error: NotFoundError;
  };

  @post
  op createPartner(@body partner: Partner, ...CommonParameters):
    | {
        @statusCode statusCode: 201;
        @body newPartner: Partner;
      }
    | {
        @statusCode statusCode: 202;
        @body acceptedPartner: Partner;
      }
    | {
        @statusCode statusCode: 400;
        @body error: ValidationError;
      }
    | {
        @statusCode statusCode: 401;
        @body error: UnauthorizedError;
      };

  @put
  op updatePartner(
    @path partnerId: string,
    @body partner: Partner,
    ...CommonParameters,
  ):
    | {
        @statusCode statusCode: 200;
        @body updatedPartner: Partner;
      }
    | {
        @statusCode statusCode: 400;
        @body error: ValidationError;
      }
    | {
        @statusCode statusCode: 401;
        @body error: UnauthorizedError;
      }
    | {
        @statusCode statusCode: 404;
        @body error: NotFoundError;
      }
    | {
        @statusCode statusCode: 500;
        @body error: InternalServerError;
      };

  @delete
  op deletePartner(@path partnerId: string, ...CommonParameters): {
    @statusCode statusCode: 204;
  } | {
    @statusCode statusCode: 401;
    @body error: UnauthorizedError;
  };
}
