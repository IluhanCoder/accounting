import mongoose from "mongoose";

export interface ModificationRequest{
    requester: mongoose.Types.ObjectId,
    type: string,
    reason: string,
    chars: string,
    crit: string,
    date: Date,
    admin: mongoose.Types.ObjectId
}

export interface ServiceRequest {
    requester: mongoose.Types.ObjectId,
    type: string,
    problem: string,
    crit: string,
    date: Date,
    admin: mongoose.Types.ObjectId
}

export interface HardwareRequest{
    type: string,
    model: string,
    chars: string,
    purpose: string,
    rent: {
        startDate: Date,
        endDate: Date
    },
    user: mongoose.Types.ObjectId | null,
    crit: string,
    status: string,
    admin: mongoose.Types.ObjectId,
    requestTo: mongoose.Types.ObjectId,
    date: Date
}