import Link from 'next/link';

export default function IntroPost() {
    return (
    <>
      <h1>Intro Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
