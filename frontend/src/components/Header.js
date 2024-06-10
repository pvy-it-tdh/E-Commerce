const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div>Logo</div>
        <div>
          <input type="text" placeholder="search product here.." />
        </div>
        <div>User icon and Cart</div>
      </div>
    </header>
  );
};

export default Header;
