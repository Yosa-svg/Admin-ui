import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import {
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  expensesStatistics,
} from "../data";
import { AuthContext } from "../context/authContext";
import { goalService } from "../services/dataService";

function Dashboard() {
  const [goals, setGoals] = useState({});
  const { logout } = useContext(AuthContext);

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <MainLayout>
      <div className="grid sm:grid-cols-12 gap-6">

        {/* Row 1 */}
        <div className="sm:col-span-4">
          <CardBalance data={balances} />
        </div>
        <div className="sm:col-span-4">
          <CardGoal data={goals} />
        </div>
        <div className="sm:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* Row 2 & 3 */}
        <div className="sm:col-span-4 sm:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>
        <div className="sm:col-span-8">
          <CardStatistic data={expensesStatistics} />
        </div>
        <div className="sm:col-span-8">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;
