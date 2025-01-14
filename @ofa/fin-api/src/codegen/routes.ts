/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PartnerController } from './../controllers/PartnerController.js';
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
    "EinvoiceAddress": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"string"},
            "updatedAt": {"dataType":"string"},
            "operator": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
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
            "code": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "businessId": {"dataType":"string","validators":{"pattern":{"value":"^[0-9]{7}-[0-9]$"}}},
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
            "einvoiceAddresses": {"dataType":"array","array":{"dataType":"refObject","ref":"EinvoiceAddress"}},
            "bankAccounts": {"dataType":"array","array":{"dataType":"refObject","ref":"BankAccount"}},
            "id": {"dataType":"string"},
            "createdAt": {"dataType":"string"},
            "updatedAt": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NotFoundError": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"enum","enums":["NOT_FOUND"],"required":true},
            "message": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ValidationError": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"enum","enums":["VALIDATION_ERROR"],"required":true},
            "message": {"dataType":"string","required":true},
            "details": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UnauthorizedError": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"enum","enums":["UNAUTHORIZED"],"required":true},
            "message": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PartnerRequest": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"string"},
            "name": {"dataType":"string","required":true},
            "businessId": {"dataType":"string","validators":{"pattern":{"value":"^[0-9]{7}-[0-9]$"}}},
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
            "einvoiceAddresses": {"dataType":"array","array":{"dataType":"refObject","ref":"EinvoiceAddress"}},
            "bankAccounts": {"dataType":"array","array":{"dataType":"refObject","ref":"BankAccount"}},
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


    
        const argsPartnerController_getPartner: Record<string, TsoaRoute.ParameterSchema> = {
                partnerId: {"in":"path","name":"partnerId","required":true,"dataType":"string"},
                clientVersion: {"in":"header","name":"clientVersion","dataType":"string"},
                locale: {"in":"query","name":"locale","dataType":"string"},
        };
        app.get('/api/v1/partner/:partnerId',
            ...(fetchMiddlewares<RequestHandler>(PartnerController)),
            ...(fetchMiddlewares<RequestHandler>(PartnerController.prototype.getPartner)),

            async function PartnerController_getPartner(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPartnerController_getPartner, request, response });

                const controller = new PartnerController();

              await templateService.apiHandler({
                methodName: 'getPartner',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPartnerController_createPartner: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"PartnerRequest"},
                clientVersion: {"in":"header","name":"clientVersion","dataType":"string"},
                locale: {"in":"query","name":"locale","dataType":"string"},
        };
        app.post('/api/v1/partner',
            ...(fetchMiddlewares<RequestHandler>(PartnerController)),
            ...(fetchMiddlewares<RequestHandler>(PartnerController.prototype.createPartner)),

            async function PartnerController_createPartner(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPartnerController_createPartner, request, response });

                const controller = new PartnerController();

              await templateService.apiHandler({
                methodName: 'createPartner',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPartnerController_updatePartner: Record<string, TsoaRoute.ParameterSchema> = {
                partnerId: {"in":"path","name":"partnerId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"PartnerRequest"},
                clientVersion: {"in":"header","name":"clientVersion","dataType":"string"},
                locale: {"in":"query","name":"locale","dataType":"string"},
        };
        app.put('/api/v1/partner/:partnerId',
            ...(fetchMiddlewares<RequestHandler>(PartnerController)),
            ...(fetchMiddlewares<RequestHandler>(PartnerController.prototype.updatePartner)),

            async function PartnerController_updatePartner(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPartnerController_updatePartner, request, response });

                const controller = new PartnerController();

              await templateService.apiHandler({
                methodName: 'updatePartner',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPartnerController_deletePartner: Record<string, TsoaRoute.ParameterSchema> = {
                partnerId: {"in":"path","name":"partnerId","required":true,"dataType":"string"},
                clientVersion: {"in":"header","name":"clientVersion","dataType":"string"},
                locale: {"in":"query","name":"locale","dataType":"string"},
        };
        app.delete('/api/v1/partner/:partnerId',
            ...(fetchMiddlewares<RequestHandler>(PartnerController)),
            ...(fetchMiddlewares<RequestHandler>(PartnerController.prototype.deletePartner)),

            async function PartnerController_deletePartner(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPartnerController_deletePartner, request, response });

                const controller = new PartnerController();

              await templateService.apiHandler({
                methodName: 'deletePartner',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 204,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
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
        const argsAboutController_swagger: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/v1/about/swagger/main',
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
