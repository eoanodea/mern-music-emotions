/*
 * File: api-track.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Wednesday, 22nd April 2020 6:58:17 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: API Requests for the Track Collection
 * Last Modified: Wednesday, 22nd April 2020 6:59:15 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

const prefix = "/api/track"

/**
 * Create a track
 * 
 * @param {body: {title: String, data: String}} body
 */
export const create  = async (body: any) => {
    try {
        const response = await fetch(`${prefix}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body
        });
        return response.json();
    }
    catch (err) {
        return console.log(err);
    }
}

/**
 * List all tracks from the server
 */
export const list  = async () => {
    try {
        const response = await fetch(`${prefix}`, {
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
 * Retreive a track from the server
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
 * Update a track in the server
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
 * Delete a track from the server
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