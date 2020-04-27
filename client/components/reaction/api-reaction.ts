/*
 * File: api-reaction.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Thursday, 23rd April 2020 5:47:22 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: API Requests for the Reaction Collection
 * Last Modified: Thursday, 23rd April 2020 5:48:12 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */


const prefix = "/api/reaction"


/**
 * Create a reaction
 * 
 * @param {body: {title: String, data: String}} body
 */
export const create  = async (body: any) => {
    try {
        const response = await fetch(`${prefix}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

/**
 * List all reactions from the server
 */
export const list  = async (id: string) => {
    try {
        const response = await fetch(`${prefix}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

/**
 * Retreive a reaction from the server
 */
export const show  = async (id: String) => {
    try {
        const response = await fetch(`${prefix}/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

/**
 * Update a reaction in the server
 * 
 * @param {id: String} id
 * @param {body: {title: String, data: String}} body
 */
export const update  = async (id: String, body: any) => {
    try {
        const response = await fetch(`${prefix}/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

/**
 * Delete a reaction from the server
 */
export const remove  = async (id: String) => {
    try {
        const response = await fetch(`${prefix}/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}