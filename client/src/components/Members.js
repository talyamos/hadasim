import React from "react";
import { useContext } from "react";
import "./Members.css";
import MyContext from "../MyContext";
import MemberCard from "./MemberCard";

const Members = () => {
  const { membersData } = useContext(MyContext);
  console.log(membersData);
  return (
    <section className="MembersDiv">
      {membersData.map((member) => {
        // console.log(member._id);
        return (
          <MemberCard
            key={member._id}
            id={member._id}
            memberId={member.id}
            firstName={member.firstName}
            lastName={member.lastName}
            vaccinations={member.vaccinations}
            image={member.image}
          />
        );
      })}
    </section>
  );
};

export default Members;
