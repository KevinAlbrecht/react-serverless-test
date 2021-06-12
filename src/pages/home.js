import GoogleSignout from '../components/ggle-signout';
export function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Tu es connecté mon enfant.</p>
      <GoogleSignout></GoogleSignout>
    </div>
  );
}
