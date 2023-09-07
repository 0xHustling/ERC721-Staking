import hardhat, { ethers } from 'hardhat';

async function deployERC721Staking(
	stakingToken: string,
	rewardsToken: string,
	duration: string,
) {
	await hardhat.run('compile');

	console.log("Deploying...");
	const ERC721Staking = await ethers.getContractFactory("ERC721Staking");
	const erc721Staking = await ERC721Staking.deploy(
		stakingToken,
		rewardsToken,
		duration,
	);
	await erc721Staking.deployTransaction.wait(10);
	console.log("ERC721 Staking deployed to:", erc721Staking.address);

	/**
	 * Verify Contracts
	 */
	console.log('Verifying ERC721 Staking on Etherscan...');
	await hardhat.run('verify:verify', {
		address: erc721Staking.address,
		constructorArguments: [stakingToken, rewardsToken, duration]
	});
}

module.exports = deployERC721Staking;