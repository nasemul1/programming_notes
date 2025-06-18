function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4 cursor-pointer">
      <div className="container mx-auto text-center">
        <p> &copy; {currentYear} || <span className="font-bold "> Programming Notes </span>|| All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;