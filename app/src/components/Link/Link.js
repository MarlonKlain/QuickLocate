/**
 * A wrapper component for the Expo Router's Link component.
 * Allows passing children and href, and optionally renders the child as the link itself.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Link.
 * @param {string} props.href - The destination URL for the Link.
 * @param {boolean} [props.child=true] - If true, renders the child as the link itself using the `asChild` prop.
 * @returns {JSX.Element} The rendered Link component.
 */
import { Link } from "expo-router";

export default function LinkComponent({ children, href, child = true }) {
  return (
    // Remember that to use properly the asChild, the Link's children component must has the onPress or onClick prop
    <Link href={href} asChild={child}>
      {children}
    </Link>
  );
}
