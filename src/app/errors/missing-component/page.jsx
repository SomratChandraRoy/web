import { SomethingElse } from "./helpers";

export default function Page() {
  const Widget = SomethingElse;
  return <div>{Widget()}</div>;
}
