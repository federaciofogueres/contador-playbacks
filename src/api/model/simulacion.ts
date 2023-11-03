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
import { VotoAsociacion } from './votoAsociacion';
import { VotoCandidatura } from './votoCandidatura';

export interface Simulacion { 
    id?: number;
    autor?: string;
    candidaturas?: Array<VotoCandidatura>;
    votos?: Array<VotoAsociacion>;
}