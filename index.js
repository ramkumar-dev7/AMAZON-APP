const http = require('http');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Amazon Clone</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: Arial, sans-serif; }
    body { background-color: #eaeded; }
    header { background-color: #131921; color: white; display: flex; align-items: center; padding: 10px 16px; gap: 18px; }
    .logo { font-size: 22px; font-weight: bold; color: #ff9900; letter-spacing: -1px; }
    .deliver { font-size: 12px; color: #ccc; }
    .deliver span { font-weight: bold; color: white; font-size: 14px; }
    .search-bar { flex: 1; display: flex; height: 40px; }
    .search-category { background: #e6e6e6; border: none; padding: 0 10px; border-radius: 4px 0 0 4px; font-size: 12px; outline: none; }
    .search-input { flex: 1; border: none; padding: 0 10px; font-size: 15px; outline: none; }
    .search-btn { background-color: #febd69; border: none; width: 45px; border-radius: 0 4px 4px 0; cursor: pointer; font-size: 18px; }
    .nav-right { display: flex; gap: 18px; font-size: 12px; align-items: center; }
    .nav-right div span { font-weight: bold; font-size: 14px; display: block; }
    .cart { font-weight: bold; font-size: 14px; }
    .sub-nav { background-color: #232f3e; color: white; display: flex; gap: 15px; padding: 8px 16px; font-size: 13px; }
    .hero {
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat;
      height: 380px; color: white; text-align: center; padding-top: 30px;
    }
    .hero h1 { font-size: 38px; letter-spacing: 2px; text-transform: uppercase; font-weight: 300; }
    .hero-books { display: flex; justify-content: center; gap: 15px; margin-top: 25px; }
    .book-card { width: 105px; height: 160px; background: #222; border: 1px solid #444; border-radius: 4px; }
    .book-logo { margin-top: 15px; font-size: 20px; font-weight: bold; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 20px; margin-top: -90px; }
    .card { background: white; padding: 20px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.15); min-height: 380px; display: flex; flex-direction: column; justify-content: space-between; }
    .card h2 { font-size: 18px; margin-bottom: 12px; color: #111; }
    .card-img { width: 100%; height: 260px; object-fit: cover; border-radius: 2px; }
    .card-link { color: #007185; text-decoration: none; font-size: 13px; margin-top: 10px; display: inline-block; }
  </style>
</head>
<body>
  <header>
    <div class="logo">amazon</div>
    <div class="deliver">Deliver to<br><span>United Kingdom</span></div>
    <div class="search-bar">
      <select class="search-category"><option>All</option></select>
      <input type="text" class="search-input" placeholder="Search Amazon">
      <button class="search-btn">🔍</button>
    </div>
    <div class="nav-right">
      <div>Hello, sign in<br><span>Accounts & Lists</span></div>
      <div>Returns<br><span>& Orders</span></div>
      <div class="cart">🛒 Cart</div>
    </div>
  </header>
  <div class="sub-nav">
    <span>Today's Deals</span><span>Customer Service</span><span>Registry</span><span>Gift Cards</span><span>Sell</span>
  </div>
  <section class="hero">
    <h1>TRAVEL TO MIDDLE-EARTH</h1>
    <div class="hero-books">
      <img class="book-card" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=200&q=80">
      <img class="book-card" src="https://images.unsplash.com/photo-1532012164546-f432f2e3ddb5?auto=format&fit=crop&w=200&q=80">
      <img class="book-card" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=200&q=80">
      <img class="book-card" src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=200&q=80">
    </div>
    <div class="book-logo">amazon books</div>
  </section>
  <main class="grid">
    <div class="card">
      <h2>We have a surprise for you</h2>
      <img class="card-img" src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=400&q=80">
      <a href="#" class="card-link">See more</a>
    </div>
    <div class="card">
      <h2>Watch The Rings of Power</h2>
      <img class="card-img" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80">
      <a href="#" class="card-link">Stream now</a>
    </div>
    <div class="card">
      <h2>Unlimited Streaming</h2>
      <img class="card-img" src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=400&q=80">
      <a href="#" class="card-link">Explore Prime Video</a>
    </div>
    <div class="card">
      <h2>More titles to explore</h2>
      <img class="card-img" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80">
      <a href="#" class="card-link">Discover titles</a>
    </div>
  </main>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(htmlContent);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Amazon UI Server running on port ' + PORT);
});
