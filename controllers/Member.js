import {
  addMemberService,
  getAllMembersService,
  getMemberService,
} from "../services/Member.js";

export const addMemberController = async (req, res) => {
  try {
    const newMember = { ...req.body };
    const createMember = addMemberService(newMember);
    await createMember.save();
    res.send(createMember);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

export const getAllMembersController = async (req, res) => {
  try {
    const members = await getAllMembersService();
    res.send(members);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};

export const getMemberController = async (req, res) => {
  try {
    const { memberId } = req.params;
    const singleMember = await getMemberService(memberId);
    if (!singleMember) {
      res.status(404).send({ message: "no such member with the specific id" });
    }
    res.send(singleMember);
  } catch (e) {
    console.log(e)
    res.status(500).send(e.message)
  }
};
