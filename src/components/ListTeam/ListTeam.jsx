import TeamCard from "../TeamCard/TeamCard";
import { StyledListTeam } from "./Styled";

const ListTeam = ({ team }) => {
  return (
    <StyledListTeam>
      {team.map((member, index) => (
        <TeamCard key={member.id} member={member} index={index} />
      ))}
    </StyledListTeam>
  );
};

export default ListTeam;
