/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DocumentController } from './../controllers/DocumentController.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AboutController } from './../controllers/AboutController.js';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Address": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"string"},
            "updatedAt": {"dataType":"string"},
            "street": {"dataType":"string"},
            "street2": {"dataType":"string"},
            "postalCode": {"dataType":"string","required":true},
            "city": {"dataType":"string"},
            "countrySubdivision": {"dataType":"string"},
            "countryCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BankAccount": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"string"},
            "updatedAt": {"dataType":"string"},
            "iban": {"dataType":"string","required":true},
            "bic": {"dataType":"string"},
            "bankName": {"dataType":"string"},
            "currency": {"dataType":"string"},
            "preferred": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partner": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"string"},
            "updatedAt": {"dataType":"string"},
            "code": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "businessId": {"dataType":"string"},
            "vatNumber": {"dataType":"string"},
            "email": {"dataType":"string"},
            "phone": {"dataType":"string"},
            "homepage": {"dataType":"string"},
            "language": {"dataType":"string"},
            "domicile": {"dataType":"string"},
            "country": {"dataType":"string"},
            "address": {"ref":"Address"},
            "deliveryAddress": {"ref":"Address"},
            "invoiceAddress": {"ref":"Address"},
            "einvoiceAddress": {"dataType":"any"},
            "bankAccounts": {"dataType":"array","array":{"dataType":"refObject","ref":"BankAccount"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Document": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"string"},
            "updatedAt": {"dataType":"string"},
            "type": {"dataType":"string","required":true},
            "date": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "status": {"dataType":"string","required":true},
            "partner": {"ref":"Partner","required":true},
            "invoice": {"dataType":"any","required":true},
            "accounting": {"dataType":"any","required":true},
            "transactions": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "entries": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "files": {"dataType":"array","array":{"dataType":"any"},"required":true},
            "history": {"dataType":"array","array":{"dataType":"any"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"silently-remove-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsDocumentController_findById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/v01/document/:id',
            ...(fetchMiddlewares<RequestHandler>(DocumentController)),
            ...(fetchMiddlewares<RequestHandler>(DocumentController.prototype.findById)),

            async function DocumentController_findById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDocumentController_findById, request, response });

                const controller = new DocumentController();

              await templateService.apiHandler({
                methodName: 'findById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAboutController_hello: Record<string, TsoaRoute.ParameterSchema> = {
                name: {"in":"path","name":"name","required":true,"dataType":"string"},
        };
        app.get('/api/v01/about/hello/:name',
            ...(fetchMiddlewares<RequestHandler>(AboutController)),
            ...(fetchMiddlewares<RequestHandler>(AboutController.prototype.hello)),

            async function AboutController_hello(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAboutController_hello, request, response });

                const controller = new AboutController();

              await templateService.apiHandler({
                methodName: 'hello',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAboutController_swagger: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v01/about/swagger/main',
            ...(fetchMiddlewares<RequestHandler>(AboutController)),
            ...(fetchMiddlewares<RequestHandler>(AboutController.prototype.swagger)),

            async function AboutController_swagger(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAboutController_swagger, request, response });

                const controller = new AboutController();

              await templateService.apiHandler({
                methodName: 'swagger',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
