const Header = () => {
  return (
    <header className="bg-blue-600 w-full flex justify-between items-center px-4 py-2">
      <h1 className="text-white text-center py-4">Header</h1>
      <nav>
        <ul className="flex gap-x-4 text-white">
          <li>
            <a href="/">トップ</a>
          </li>
          <li>
            <a href="/sub/">サブページ</a>
          </li>
          <li>
            <a href="/sub/detail.html">サブページ詳細</a>
          </li>
          <li>
            <a href="/admin/">管理メニュー</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
