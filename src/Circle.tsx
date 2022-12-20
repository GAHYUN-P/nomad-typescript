import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// optional props 주는 법  속성명 ?: 타입
interface CircleProps {
  bgColor: string;
  borderColor?: string; // borderColor: string | undefined;
  text?: string;
}

// default값 주는 법 (text="default text")
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    // borderColor 값이 있으면 borderColor을 넣어주고 아니면 bgColor을 넣어준다
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
