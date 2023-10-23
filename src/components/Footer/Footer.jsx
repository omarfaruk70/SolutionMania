const Footer = () => {
    return (
<footer className="footer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 bg-base-200 rounded-3xl text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="email" name="email" placeholder="username@site.com" className="input input-bordered w-full pr-14" required/> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none after:content-['_↗']">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;