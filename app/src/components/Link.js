import { Link } from "expo-router";

export default function LinkComponent({ children, href, child = true }) {
  return (
    // Remember that to use properly the asChild, the Link's children component must has the onPress or onClick prop
    <Link href={href} asChild={child}>
      {children}
    </Link>
  );
}
