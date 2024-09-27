import {Card} from "../components/Card.tsx";
interface MembersProps {
    avatar: string;
    name: string;
    introduction: string;
    contribution: string;

}

export function Members({}: MembersProps) {

  return (
    <Card  avatar={''}  name={'12345'} contribution={'1243'} introduction={'43242'}></Card>
  );
}
