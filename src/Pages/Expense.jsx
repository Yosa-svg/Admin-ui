import React, { useState, useEffect, useContext } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenseItem from "../components/Fragments/CardExpenseItem";
import CircularProgress from '@mui/material/CircularProgress';
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function ExpensePage() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { logout } = useContext(AuthContext);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      setIsLoading(true);
      const data = await expenseService();
      setExpenses(data);
    } catch (err) {
      console.error("Gagal mengambil data expenses:", err);
      if (err.status === 401) {
        logout();
      } else {
        setSnackbar({ open: true, message: err.msg || "Failed to fetch expenses", severity: "error" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="mb-6">
        <h2 className="text-xl text-gray-02 dark:text-gray-400 font-semibold mb-4">Expenses Comparison</h2>
        
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-64 text-primary">
            <CircularProgress color="inherit" size={50} enableTrackSlot />
            <div className="mt-2 text-defaultBlack dark:text-white">Loading Expenses...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expenses.map((expenseData, index) => (
              <CardExpenseItem key={index} data={expenseData} />
            ))}
          </div>
        )}
      </div>
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default ExpensePage;
