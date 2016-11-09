// Type definitions for restify-cors 1.0.0
// Project: restify-cors
// Definitions by: Manuel Rauber <manuel.rauber@thinktecture.com>

import RestifyCorsMiddleware = RestifyCors.RestifyCorsMiddleware;

export = RestifyCors;

declare function RestifyCors(options: RestifyCors.RestifyCorsOptions): RestifyCors.RestifyCorsMiddleware;

declare namespace RestifyCors {
    type CorsHandlerCallback = (options: RestifyCorsOptions) => Restify.RequestHandler;

    export interface RestifyCorsOptions {
        origins?: Array<string>;
        allowHeaders?: Array<string>;
        exposeHeaders?: Array<string>;
        preflightMaxAge?: number;
    }

    export interface RestifyCorsMiddleware {
        actual: CorsHandlerCallback;
        preflight: CorsHandlerCallback;
    }
}
