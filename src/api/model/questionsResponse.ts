/**
 * futur-fogueres-api
 * The API for Futur Fogueres project
 *
 * OpenAPI spec version: 1.0.0100
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Question } from './question';
import { Respuesta200 } from './respuesta200';

export interface QuestionsResponse { 
    status?: Respuesta200;
    preguntas?: Array<Question>;
}