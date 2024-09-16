const EthDater = require('ethereum-block-by-date');
const { ethers } = require('ethers');
// const provider = new ethers.providers.CloudflareProvider();

const opRpc = process.env.RPC;

const provider = new ethers.providers.JsonRpcProvider(opRpc);

const dater = new EthDater(
  provider // Ethers provider, required.
);

const main = async () => {
  const startBlock = await dater.getDate(
    '2024-07-15 12:50:00+00', // Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
    true, // Block after, optional. Search for the nearest block before or after the given date. By default true.
    false // Refresh boundaries, optional. Recheck the latest block before request. By default false.
  );

  const endBlock = await dater.getDate(
    '2024-08-15 12:50:00+00', // Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
    true, // Block after, optional. Search for the nearest block before or after the given date. By default true.
    false // Refresh boundaries, optional. Recheck the latest block before request. By default false.
  );

  console.log('startBlock', startBlock);
  console.log('endBlock', endBlock);
};

main();
