import CustomerTable from "@/components/Table/CustomerTable";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Customer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const res = axios
      .get("https://dummyjson.com/users")
      .then((data) => setUsers(data.data.users));
  }, []);
  console.log(users);
  return (
    <div>
      <CustomerTable data={users} />
    </div>
  );
};

export default Customer;
