

function NavLink({ href, children }) {
  return (
    <a href={href} class="hover:text-stone-900">
      {children}
    </a>
  );
}


export default NavLink;