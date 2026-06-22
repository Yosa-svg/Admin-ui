import Icon from "./components/Elements/Icon";

export const bills = [
  {
    id: 1,
    name: "Figma - Yearly Plan",
    description:
      "For advanced security and more flexible controls, the Proffesional plans help you scale design process company-wide.",
    icon: <Icon.Figma />,
    date: "15",
    month: "May",
    lastCharge: "2022-05-14",
    amount: 150,
  },
  {
    id: 2,
    name: "Adobe Inc - Yearly Plan",
    description:
      "For advanced security and more flexible controls, the Proffesional plans help you scale design process company-wide.",
    icon: <Icon.Adobe />,
    date: "16",
    month: "June",
    lastCharge: "2022-06-17",
    amount: 559,
  },
];

export const expensesBreakdowns = [
  {
    id: 1,
    category: "Housing",
    amount: 250,
    percentage: 15,
    icon: <Icon.House />,
    arrow: (
      <div className="text-special-red">
        <Icon.ArrowUp size={16} />
      </div>
    ),
  },
  {
    id: 2,
    category: "Food",
    amount: 350,
    percentage: 8,
    icon: <Icon.Food />,
    arrow: (
      <div className="text-special-green">
        <Icon.ArrowDown size={16} />
      </div>
    ),
  },
  {
    id: 3,
    category: "Transportation",
    amount: 50,
    percentage: 12,
    icon: <Icon.Transport />,
    arrow: (
      <div className="text-special-green">
        <Icon.ArrowDown size={16} />
      </div>
    ),
  },
  {
    id: 4,
    category: "Entertainment",
    amount: 80,
    percentage: 15,
    icon: <Icon.Gamepad />,
    arrow: (
      <div className="text-special-green">
        <Icon.ArrowDown size={16} />
      </div>
    ),
  },
  {
    id: 5,
    category: "Shopping",
    amount: 420,
    percentage: 25,
    icon: <Icon.Shopping />,
    arrow: (
      <div className="text-special-red">
        <Icon.ArrowUp size={16} />
      </div>
    ),
  },
  {
    id: 6,
    category: "Others",
    amount: 650,
    percentage: 23,
    icon: <Icon.Other />,
    arrow: (
      <div className="text-special-red">
        <Icon.ArrowUp size={16} />
      </div>
    ),
  },
];

export const expensesStatistics = {
  dataKey: "date",
  series: [
    { dataKey: "amountThisWeek", label: "This Week", color: "#E8E8E8" },
    { dataKey: "amountLastWeek", label: "Last Week", color: "#299D91" },
  ],
  data: [
    { id: 1, date: "17 Sun", amountThisWeek: 25000, amountLastWeek: 50000 },
    { id: 2, date: "18 Mon", amountThisWeek: 50000, amountLastWeek: 10000 },
    { id: 3, date: "19 Tue", amountThisWeek: 10000, amountLastWeek: 50000 },
    { id: 4, date: "20 Wed", amountThisWeek: 50000, amountLastWeek: 50000 },
    { id: 5, date: "21 Thu", amountThisWeek: 50000, amountLastWeek: 10000 },
    { id: 6, date: "22 Fri", amountThisWeek: 25000, amountLastWeek: 10000 },
    { id: 7, date: "23 Sat", amountThisWeek: 50000, amountLastWeek: 10000 },
  ],
};

export const transactions = [
  {
    id: 1,
    transactionName: "GTR 5",
    categoryId: 5,
    shopName: "Gadget & Gear",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 160,
    type: "Expense",
    icon: <Icon.Gamepad />,
  },
  {
    id: 2,
    transactionName: "Polo Shirt",
    categoryId: 5,
    shopName: "XL Fashions",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 20,
    type: "Expense",
    icon: <Icon.Shopping />,
  },
  {
    id: 3,
    transactionName: "Biriyani",
    categoryId: 2,
    shopName: "Hajir Biriyani",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 12,
    type: "Expense",
    icon: <Icon.Food />,
  },
  {
    id: 4,
    transactionName: "Movie Ticket",
    categoryId: 4,
    shopName: "Inox",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 15,
    type: "Expense",
    icon: <Icon.Movie />,
  },
  {
    id: 5,
    transactionName: "Taxi Fare",
    categoryId: 3,
    shopName: "Uber",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 10,
    type: "Expense",
    icon: <Icon.Transport />,
  },
  {
    id: 6,
    transactionName: "Pizza",
    categoryId: 2,
    shopName: "Pizza Hut",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 20,
    type: "Expense",
    icon: <Icon.Food />,
  },
  {
    id: 7,
    transactionName: "Keyboard",
    categoryId: 5,
    shopName: "Gadget & Gear",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 30,
    type: "Expense",
    icon: <Icon.Shopping />,
  },
  {
    id: 8,
    transactionName: "Project Fee",
    categoryId: 6,
    shopName: "Landing Page",
    date: "2023-05-17",
    paymentMethod: "Credit Card",
    amount: 100,
    type: "Revenue",
    icon: <Icon.Other />,
  },
];

export const balances = [
  {
    id: 1,
    bankName: "Master Card",
    branchName: "",
    accountType: "Credit Card",
    accountNumber: "3388 4556 8860 80000",
    balance: 25000,
    logo: <Icon.Mastercard />,
  },
  {
    id: 2,
    bankName: "AB Bank Ltd.",
    branchName: "Park Street Branch",
    accountType: "Checking",
    accountNumber: "693 456 69 90000",
    balance: 25000,
    logo: <Icon.Visa />,
  },
  {
    id: 3,
    bankName: "Brac Bank Ltd",
    branchName: "",
    accountType: "Saving",
    accountNumber: "133 456 886 80000",
    balance: 25000,
    logo: "",
  },
  {
    id: 4,
    bankName: "AB Bank Ltd",
    branchName: "",
    accountType: "Investment",
    accountNumber: "698 456 866 20000",
    balance: 25000,
    logo: "",
  },
  {
    id: 5,
    bankName: "Loan",
    branchName: "",
    accountType: "City Bank Ltd",
    accountNumber: "363 456 896 60000",
    balance: 25000,
    logo: "",
  },
];

export const goals = {
  id: 1,
  targetAmount: 20000,
  presentAmount: 12500,
  month: 5,
  year: 2023,
};
