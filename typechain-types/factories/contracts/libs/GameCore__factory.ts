/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GameCore,
  GameCoreInterface,
} from "../../../contracts/libs/GameCore";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "betInfo",
    outputs: [
      {
        internalType: "address",
        name: "coinAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "betAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRecieveAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gameHistory",
    outputs: [
      {
        internalType: "uint256",
        name: "gameId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user1",
        type: "address",
      },
      {
        internalType: "address",
        name: "user1coinAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "user1GetAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user2",
        type: "address",
      },
      {
        internalType: "address",
        name: "user2coinAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "user2GetAmount",
        type: "uint256",
      },
      {
        internalType: "uint240",
        name: "timeStamp",
        type: "uint240",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gameInfo",
    outputs: [
      {
        internalType: "address",
        name: "user1",
        type: "address",
      },
      {
        internalType: "address",
        name: "user2",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "coinAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "betAmount",
            type: "uint256",
          },
          {
            internalType: "uint256[5]",
            name: "nftSkinId",
            type: "uint256[5]",
          },
        ],
        internalType: "struct GameCore.BetInfo",
        name: "user1BetInfo",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "coinAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "betAmount",
            type: "uint256",
          },
          {
            internalType: "uint256[5]",
            name: "nftSkinId",
            type: "uint256[5]",
          },
        ],
        internalType: "struct GameCore.BetInfo",
        name: "user2BetInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getShootingNft",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getShootingRole",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isOnGame",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shootingNft",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shootingRole",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
    ],
    name: "updateShootingNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "roleContract",
        type: "address",
      },
    ],
    name: "updateShootingRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "usedSalt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d94806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c80637999a68c116100715780637999a68c14610181578063a6f816681461019f578063ae07a3aa146101d2578063c3b9ed02146101f0578063df65301f14610221578063e2d35f0714610251576100b3565b8062b95ab2146100b85780632f59f6f4146100d65780633f2ea8bb146100f257806348b526e114610129578063601a6d8914610147578063660b68ca14610165575b600080fd5b6100c0610281565b6040516100cd9190610913565b60405180910390f35b6100f060048036038101906100eb919061095f565b6102ab565b005b61010c600480360381019061010791906109c2565b6103ca565b604051610120989796959493929190610a4a565b60405180910390f35b6101316104d9565b60405161013e9190610913565b60405180910390f35b61014f610502565b60405161015c9190610913565b60405180910390f35b61017f600480360381019061017a919061095f565b610528565b005b610189610646565b6040516101969190610913565b60405180910390f35b6101b960048036038101906101b49190610ac8565b61066c565b6040516101c99493929190610bf1565b60405180910390f35b6101da61083a565b6040516101e79190610913565b60405180910390f35b61020a6004803603810190610205919061095f565b61085e565b604051610218929190610c38565b60405180910390f35b61023b60048036038101906102369190610ac8565b6108a2565b6040516102489190610c61565b60405180910390f35b61026b6004803603810190610266919061095f565b6108ba565b6040516102789190610c61565b60405180910390f35b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b81526004016103049190610913565b6020604051808303816000875af1158015610323573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103479190610cb4565b610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d90610d3e565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600660205281600052604060002081815481106103e657600080fd5b9060005260206000209060080201600091509150508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154908060070160009054906101000a90047dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905088565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166324d7806c336040518263ffffffff1660e01b81526004016105819190610913565b6020604051808303816000875af11580156105a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c49190610cb4565b610603576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fa90610d3e565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201600580602002604051908101604052809291908260058015610777576020028201915b815481526020019060010190808311610763575b50505050508152505090806009016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015481526020016002820160058060200260405190810160405280929190826005801561082c576020028201915b815481526020019060010190808311610818575b505050505081525050905084565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60046020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60076020528060005260406000206000915090505481565b60036020528060005260406000206000915090505481565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108fd826108d2565b9050919050565b61090d816108f2565b82525050565b60006020820190506109286000830184610904565b92915050565b600080fd5b61093c816108f2565b811461094757600080fd5b50565b60008135905061095981610933565b92915050565b6000602082840312156109755761097461092e565b5b60006109838482850161094a565b91505092915050565b6000819050919050565b61099f8161098c565b81146109aa57600080fd5b50565b6000813590506109bc81610996565b92915050565b600080604083850312156109d9576109d861092e565b5b60006109e78582860161094a565b92505060206109f8858286016109ad565b9150509250929050565b610a0b8161098c565b82525050565b60007dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b610a4481610a11565b82525050565b600061010082019050610a60600083018b610a02565b610a6d602083018a610904565b610a7a6040830189610904565b610a876060830188610a02565b610a946080830187610904565b610aa160a0830186610904565b610aae60c0830185610a02565b610abb60e0830184610a3b565b9998505050505050505050565b600060208284031215610ade57610add61092e565b5b6000610aec848285016109ad565b91505092915050565b610afe816108f2565b82525050565b610b0d8161098c565b82525050565b600060059050919050565b600081905092915050565b6000819050919050565b6000610b3f8383610b04565b60208301905092915050565b6000602082019050919050565b610b6181610b13565b610b6b8184610b1e565b9250610b7682610b29565b8060005b83811015610ba7578151610b8e8782610b33565b9650610b9983610b4b565b925050600181019050610b7a565b505050505050565b60e082016000820151610bc56000850182610af5565b506020820151610bd86020850182610b04565b506040820151610beb6040850182610b58565b50505050565b600061020082019050610c076000830187610904565b610c146020830186610904565b610c216040830185610baf565b610c2f610120830184610baf565b95945050505050565b6000604082019050610c4d6000830185610904565b610c5a6020830184610a02565b9392505050565b6000602082019050610c766000830184610a02565b92915050565b60008115159050919050565b610c9181610c7c565b8114610c9c57600080fd5b50565b600081519050610cae81610c88565b92915050565b600060208284031215610cca57610cc961092e565b5b6000610cd884828501610c9f565b91505092915050565b600082825260208201905092915050565b7f53686f6f74696e67526f6c653a206f6e6c792061646d696e0000000000000000600082015250565b6000610d28601883610ce1565b9150610d3382610cf2565b602082019050919050565b60006020820190508181036000830152610d5781610d1b565b905091905056fea2646970667358221220db3975195fe61cdab73e8d80e2482d475fedfb426f12a219e346b88d52fba79064736f6c63430008110033";

type GameCoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GameCoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GameCore__factory extends ContractFactory {
  constructor(...args: GameCoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GameCore> {
    return super.deploy(overrides || {}) as Promise<GameCore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GameCore {
    return super.attach(address) as GameCore;
  }
  override connect(signer: Signer): GameCore__factory {
    return super.connect(signer) as GameCore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameCoreInterface {
    return new utils.Interface(_abi) as GameCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GameCore {
    return new Contract(address, _abi, signerOrProvider) as GameCore;
  }
}