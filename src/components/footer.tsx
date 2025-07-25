const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-orange-200 py-6 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center  justify-center px-4">
        &copy; {new Date().getFullYear()} Electronics Market. All rights reserved.<br/>
      </div>
    </footer>
  );
};

export default Footer;

