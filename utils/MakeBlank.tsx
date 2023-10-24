export function MakeBlank(text: string) {
  return text?.split('\n').map((line: string, index: number) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
}
