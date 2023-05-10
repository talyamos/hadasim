import { Member } from "../models/Member.js";

export const addMemberService = (newMember) => {
  return new Member(newMember);
};

export const getAllMembersService = () => {
  return Member.find({});
};

export const getMemberService = (memberId) => {
  return Member.findOne({ id: memberId });
};
