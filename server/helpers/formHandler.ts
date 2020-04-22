import { Request } from "express";
import formidable from "formidable";


/**
 * Type definition for formidable form parsed
 */
type IParsedForm = {
    files: {
        data: {
            path: string
            type: string
        }
    },
    fields: {
        title: string
    }
} 

/**
 * Parses form data asyncronously
 * 
 * @param req 
 */
export const parseForm = function(req: Request) {
    return new Promise<IParsedForm>(async function (resolve, reject) {
        let form = new formidable.IncomingForm();
        form.keepExtensions = true

        form.parse(req, function (err, fields, files) {
            if (err) {
                reject(err);
                return;
            }

            let response = {
                files,
                fields
            }
            // @ts-ignore
            resolve(response);
        }); 
    });
}