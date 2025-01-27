import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  kokioSidebar: [
    "intro",
    // 'Architecture',
    {
      type: "category",
      label: "eSIM",
      items: [
        {
          type: "doc",
          id: "eSIM/intro",
        },
        {
          type: "doc",
          id: "eSIM/problem",
        },
        {
          type: "doc",
          id: "eSIM/solution",
        },
        {
          type: "doc",
          id: "eSIM/working",
        },
      ],
    },
    {
      type: "category",
      label: "Smart Contracts",
      items: [
        {
          type: "doc",
          id: "SmartContracts/intro",
        },
        {
          type: "doc",
          id: "SmartContracts/walletSuite",
        },
        {
          type: "doc",
          id: "SmartContracts/registryContract",
        },
        {
          type: "doc",
          id: "SmartContracts/lazyWalletRegistry",
        },
        {
          type: "doc",
          id: "SmartContracts/deviceWalletFactory",
        },
        {
          type: "doc",
          id: "SmartContracts/deviceWalletSmartContract",
        },
        {
          type: "doc",
          id: "SmartContracts/esimWalletFactory",
        },
        {
          type: "doc",
          id: "SmartContracts/esimWalletSmartContract",
        },
        {
          type: "doc",
          id: "SmartContracts/p256verifier",
        },
        {
          type: "doc",
          id: "SmartContracts/webAuthnLibrary",
        },
        {
          type: "doc",
          id: "SmartContracts/userFlow",
        },
        {
          type: "doc",
          id: "SmartContracts/contractSpecs",
        },
        {
          type: "doc",
          id: "SmartContracts/futureProspects",
        },
      ],
    },
    "resources",
  ],
};

export default sidebars;
