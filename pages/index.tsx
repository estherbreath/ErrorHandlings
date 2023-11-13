import { ConnectWallet, Web3Button, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import {abi} from "../constants/abi";
import {CA} from "../constants/address"
import { NextPage } from "next";

//import { abi, CA } from "../constants/contract";

const Home: NextPage = () => {
  const { contract } = useContract(CA, abi);
  const [number, setNumber] = useState<number | string>("");

  const { data, isLoading, error } = useContractRead(contract, "value", []);

  // const getNum = async () => {
  //   try {
  //     const currentValue = await contract.call<number>("value", []);
  //     setNumber(currentValue);
  //   } catch (error) {
  //     console.error("Failed to read contract", error);
  //   }
  // };
  const getNum = () => {
    if (error) {
      console.error("Failed to read contract", error);
    }
    console.log(data);
    setNumber(Number(data));
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.connect}>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>
            {" "}
            <span className={styles.gradientText0}>
              ErrorHandling Dapp.
            </span>
          </h1>

          <span className={styles.last}>Number: {number}</span>
        </div>

        <div className={styles.functions}>
          <Web3Button
            onSuccess={() => alert("Value set successfully!")}
            onError={() => alert("Something went wrong!")}
            contractAddress={CA}
            contractAbi={abi}
            action={(contract) => contract.call("setValue", [42])}
          >
            setValue
          </Web3Button>

          <Web3Button
            onSuccess={() => alert("Value increased successfully!")}
            onError={() => alert("Something went wrong!")}
            contractAddress={CA}
            contractAbi={abi}
            action={(contract) => contract.call("increaseValue", [10])}
          >
            increaseValue
          </Web3Button>

          <Web3Button
            onSuccess={() => alert("Value decreased successfully!")}
            onError={() => alert("Something went wrong!")}
            contractAddress={CA}
            contractAbi={abi}
            action={(contract) => contract.call("decreaseValue", [5])}
          >
            decreaseValue
          </Web3Button>

          <button className={styles.button} onClick={getNum}>
            show number
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
