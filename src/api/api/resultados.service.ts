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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { ResultResponse } from '../model/resultResponse';
import { ResultsResponse } from '../model/resultsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ResultadosService {

    protected basePath = 'https://virtserver.swaggerhub.com/FGARCIADEVELOP_1/futurFogueres/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Devuelve todas los resultados almacenados.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllResults(observe?: 'body', reportProgress?: boolean): Observable<ResultsResponse>;
    public getAllResults(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultsResponse>>;
    public getAllResults(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultsResponse>>;
    public getAllResults(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResultsResponse>('get',`${this.basePath}/resultados`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Devuelve todos los resultados del día consultado
     * @param idDia 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllResultsByDia(idDia: number, observe?: 'body', reportProgress?: boolean): Observable<ResultResponse>;
    public getAllResultsByDia(idDia: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResultResponse>>;
    public getAllResultsByDia(idDia: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResultResponse>>;
    public getAllResultsByDia(idDia: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (idDia === null || idDia === undefined) {
            throw new Error('Required parameter idDia was null or undefined when calling getAllResultsByDia.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResultResponse>('get',`${this.basePath}/resultados/${encodeURIComponent(String(idDia))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
