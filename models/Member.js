import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  id: { type: String, required: true, unique: true, match: /^[0-9]{9}$/ },
  address: {
    type: [
      {
        city: { type: String, required: true },
        street: { type: String, required: true },
        houseNum: { type: Number, required: true, max: 350 },
      },
    ],
    _id: false,
  },
  birthDate: { type: Date, required: true, min: "1900-01-01", max: Date.now() },
  phone: { type: String, required: true, match: /^0[2-9]-[0-9]{7}$/ },
  mobilePhone: { type: String, required: true, match: /^05[0-9]-[0-9]{7}$/ },
  vaccinations: {
    type: [
      {
        date: {
          type: Date,
          required: true,
          min: "2020-12-01",
          max: Date.now(),
        },
        manufacturer: { type: String, required: true },
      },
    ],
    default: [],
    _id: false,
    max: 4,
  },
  positiveResultDate: { type: Date, min: "2020-02-01", max: Date.now() },
  recoveryDate: { type: Date, min: "2020-02-14", max: Date.now() },
  image: {
    type: String,
    default: `https://img.freepik.com/premium-vector/male-avatar-icon-unknown-anonymous-person-default-avatar-profile-icon-social-media-user-business-man-man-profile-silhouette-isolated-white-background-vector-illustration_735449-120.jpg`,
  },
  dateCreated: { type: Date, default: Date.now() },
});

export const Member = mongoose.model("Member", memberSchema);
