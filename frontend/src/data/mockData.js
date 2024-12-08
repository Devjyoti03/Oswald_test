import { Images } from "../assets/images";
import {Icons } from "../assets/icons"

export const FEATURES_ALL = [
  {
    id: "collective_1",
    icon: Icons.project_cord,
    title: "For Everyone",
    description:
      "Anyone can use our npm package to backup thier files.",
  },
  {
    id: "collective_2",
    icon: Icons.risk_mgmt,
    title: "Risk Management",
    description:
      "Saving unnecesary deleting of web3 files from GitHub.",
  },
  {
    id: "collective_3",
    icon: Icons.communication,
    title: "Complete CI/CD Implementation",
    description:
      "Integrate, Deploy and Backup files on GitHub.",
  },
  {
    id: "collective_4",
    icon: Icons.strategic_align,
    title: "Audit Consensus using Agents",
    description:
      "We are providing auditing using Agents",
  },
  {
    id: "collective_5",
    icon: Icons.scope_mgmt,
    title: "Scan and Deploy using Agents",
    description:
      "Changes in project will be scanned and deployed using Agents.",
  },
  {
    id: "collective_6",
    icon: Icons.quality_assur,
    title: "Quality Assurance",
    description:
      "Oversee project standards and quality, ensuring outputs deployed on any EVM chain",
  },
];

export const COMMANDS = [
  {
    id: "I1",
    image: Images.I1,
    title: "Pipeline Setup Commands",
    description:`1. **oswald setup-pipeline**: Sets up the Walrus GitHub Actions workflow for automatic backups.\n
   2. **oswald remove-pipeline**: Removes the Walrus GitHub Actions workflow.\n
   3. **oswald armor-on**: Activates the Slither security analysis workflow for smart contracts.\n
   4. **oswald armor-off**: Deactivates the Slither security analysis workflow.`
  },
  {
  id: "I2",
  image: Images.I6,
  title: "Configuration Commands",
  description: `
    1. **oswald setupcreds**: Saves your email address for workflow notifications.
       
    2. **oswald savechain**: Saves a new blockchain network configuration.
       
    3. **oswald deletechain**: Deletes an existing blockchain network configuration.
  `,
},
  {
    id: "I3",
    image: Images.I5,
    title: "Hardhat Integration Commands",
    description: `
      **oswald setuphardhat <contract_name> <chain_name>**
      - Creates a GitHub Actions workflow to deploy a smart contract using Hardhat.\n
      - Example: oswald setuphardhat MyContract polygon
    `,
  },
  {
    id: "I4",
    image: Images.I4,
    title: "General Commands",
    description:
      `
    1. **oswald help**: Displays this help information.
    
    2. **oswald credits**: Shows the contributors of the project.
  `,
  },
];

export const FEATURES_GRID_DATA = [
  {
    id: "feat_grid_1",
    title: "Simple & Easy to Use",
    description:
      "Just install the npm package, and setup your Private Key & Contract Address to start your journey.",
    image: Images.ai_process,
  },
  {
    id: "feat_grid_2",
    title: "Archival Solution on SUI using Walrus",
    description: "Create an advanced Archival Solution on SUI blockchain using Walrus, enabling secure, decentralized, and efficient data storage and retrieval for streamlined Web3 operations.",
    image: Images.user_stories,
  },
  {
    id: "feat_grid_3",
    title: "A Complete CI/CD PIPELINE",
    description:
      "Comprehensive CI/CD pipeline to streamline development and deployment, ensuring seamless integration, automated testing, and continuous delivery of high-quality software with enhanced efficiency and reliability.",
    image: Images.ai_test_case,
  },
  {
    id: "feat_grid_4",
    title: "Audit Consensus using Agents",
    description:
      "Implementing Audit Consensus using intelligent agents to enhance accuracy, transparency, and efficiency.",
    image: Images.import_design,
  },
  {
    id: "feat_grid_5",
    title: "Deploy through any EVM Chains",
    description:
      "Enable seamless deployment on any EVM-compatible blockchain, ensuring flexibility, scalability, and secure smart contract interactions across networks.",
    image: Images.sync_tools,
  },
];