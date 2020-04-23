/*
 * File: reaction.controller.ts
 * Project: mern-music-emotions
 * Version: 1.0.0
 * File Created: Thursday, 23rd April 2020 5:13:25 pm
 * Author: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * File Description: Controller for the Reaction Model
 * Last Modified: Thursday, 23rd April 2020 5:13:48 pm
 * Modified By: Eoan O'Dea - eoan@wspace.ie
 * ---------------
 * Copyright 2020 - WebSpace
 */

/**
 * Primary dependencies
 */
import { Request, Response } from "express";

/**
 * Model Schema
 */
import Reaction from "../models/reaction.model";

/**
 * Helpers for sucess and error responses
 */
import { handleSuccess, handleError } from "../helpers/responseHandler";

/**
 * Create a reaction in the database
 *
 * @param req
 * @param res
 */
export const create = async (req: Request, res: Response) => {
  try {
    const reaction = new Reaction(req.body);

    const response = await reaction.save();

    return res.status(200).json(handleSuccess(response));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Retreive all reactions from the database
 *
 * @param req
 * @param res
 */
export const list = async (req: Request, res: Response) => {
  try {
    const reactions = await Reaction.find({});

    return res.status(200).json(handleSuccess(reactions));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Retreive a reaction by ID from the database
 *
 * @param req
 * @param res
 */
export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reaction = await Reaction.findById(id);

    return res.status(200).json(handleSuccess(reaction));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Update a reaction by ID
 *
 * @param req
 * @param res
 */
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reaction = await Reaction.findByIdAndUpdate(id, req.body);

    return res.status(200).json(handleSuccess(reaction));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};

/**
 * Delete a reaction by ID
 *
 * @param req
 * @param res
 */
export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reaction = await Reaction.deleteOne({ _id: id });

    return res.status(200).json(handleSuccess(reaction));
  } catch (err) {
    return res.status(400).json(handleError(err));
  }
};
