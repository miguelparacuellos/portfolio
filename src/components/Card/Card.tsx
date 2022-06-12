import { Container } from "./styles";
import { ContainerProps } from "./ts";

type Props = ContainerProps;

const Card = (props: Props) => <Container {...props}>{children}</Container>;

export default Card;
