import { task } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-abi-exporter';
import 'hardhat-typechain';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import * as config from './config';

task('deploy-erc721-staking', 'Deploys the ERC721 Staking Contract')
	.addParam('stakingToken', 'The address of the staking token')
	.addParam('rewardsToken', 'The address of the rewards token')
	.addParam('duration', 'The duration of the farming in seconds')
	.setAction(async (args) => {
		const deployERC721Staking = require('./scripts/deploy-erc721-staking');
		await deployERC721Staking(
			args.stakingToken,
			args.rewardsToken,
			args.duration,
		);
	});

module.exports = {
	solidity: {
		version: '0.8.11',
		settings: {
			optimizer: {
				enabled: true,
				runs: 9999,
				details: {
					yul: false
				}
			},
		},
	},
	defaultNetwork: 'hardhat',
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
		},
	},
	networks: config.networks,
	etherscan: config.etherscan,
	abiExporter: {
		only: ['ERC721Staking'],
		except: ['.*Mock$'],
		clear: true,
		flat: true,
	},
	gasReporter: {
		enabled: !!(process.env.REPORT_GAS)
	},
};
