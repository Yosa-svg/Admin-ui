import OverviewSVG from "../../assets/icons/Overview.svg?react";
import TransactionSVG from "../../assets/icons/Transaction.svg?react";
import BalanceSVG from "../../assets/icons/wallet.svg?react";
import BillSVG from "../../assets/icons/Bill.svg?react";
import ExpenseSVG from "../../assets/icons/Expencces.svg?react";
import GoalSVG from "../../assets/icons/Goal.svg?react";
import SettingSVG from "../../assets/icons/Settings.svg?react";
import DetailSVG from "../../assets/icons/Icon.svg?react";
import ChevronRightSVG from "../../assets/icons/chevrons-right.svg?react";
import LogoutSVG from "../../assets/icons/Icon2.svg?react";

const Icon = {
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <OverviewSVG width={size} height={size} stroke={color} {...props} />
  ),
  Transaction: ({ size = 24, color = "currentColor", ...props }) => (
    <TransactionSVG width={size} height={size} stroke={color} {...props} />
  ),
  Balance: ({ size = 24, color = "currentColor", ...props }) => (
    <BalanceSVG width={size} height={size} stroke={color} {...props} />
  ),
  Bill: ({ size = 24, color = "currentColor", ...props }) => (
    <BillSVG width={size} height={size} stroke={color} {...props} />
  ),
  Expense: ({ size = 24, color = "currentColor", ...props }) => (
    <ExpenseSVG width={size} height={size} stroke={color} {...props} />
  ),
  Goal: ({ size = 24, color = "currentColor", ...props }) => (
    <GoalSVG width={size} height={size} stroke={color} {...props} />
  ),
  Setting: ({ size = 24, color = "currentColor", ...props }) => (
    <SettingSVG width={size} height={size} stroke={color} {...props} />
  ),
  Detail: ({ size = 24, color = "currentColor", ...props }) => (
    <DetailSVG width={size} height={size} fill={color} {...props} />
  ),
  ChevronRight: ({ size = 24, color = "currentColor", ...props }) => (
    <ChevronRightSVG width={size} height={size} stroke={color} {...props} />
  ),
  Logout: ({ size = 24, color = "currentColor", ...props }) => (
    <LogoutSVG width={size} height={size} stroke={color} {...props} />
  ),
};

export default Icon;
