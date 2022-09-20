import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";


export default function Home() {
  const address = useAddress();
  console.log(address);

  return (
      <ConnectWallet accentColor="#f213a4" colorMode="light" />
  );
}
