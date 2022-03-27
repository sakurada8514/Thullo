import { BoardMember } from "models/board";
import { useLocation } from "react-router-dom";

const MEMBER_DISPLAY_COUNT = 3;

export const useBoardListPresenter = () => {
  const location = useLocation();
  const sliceThreeMember = (members: BoardMember[]): BoardMember[] =>
    members.slice(0, MEMBER_DISPLAY_COUNT);
  const calcOverMemberCount = (members: BoardMember[]): number | null => {
    if (members.length <= MEMBER_DISPLAY_COUNT) return null;
    return members.length - MEMBER_DISPLAY_COUNT;
  };
  return { location, sliceThreeMember, calcOverMemberCount };
};
