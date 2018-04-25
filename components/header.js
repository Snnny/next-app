
import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/about">
      <button style={{ fontSize: 20 }}>Go to About Page</button>
    </Link>
    <Link href="/">
      <a style={{ fontSize: 20 }}>Go Home</a>
    </Link>
  </div>
)

export default Header