import React from 'react'

/**
 * Class Service
 * Call the information from the api using the urlApi
 */
export default class Service {

    private urlApi: string;

    //Constructor
    constructor(){
        this.urlApi = 'https://api.coinlore.net/api/';
    }

    //Get list crypto currency
    async getAll(){
        try {
            const response = await fetch(`${this.urlApi}tickers/`);
            const json = await response.json();
            return json.data;
        } catch (error) {
            console.error(error);
        }
    }

    //Get info crypto currency by id
    async getInfoById(id: number){
        try {
            const response = await fetch(`${this.urlApi}ticker/?id=${id}`);
            const json = await response.json();
            console.log('response ticker id: ', json);
        } catch (error) {
            console.error(error);
        }
    }

}