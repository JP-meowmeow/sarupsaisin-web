import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthStore from "../../store/authStore";
const URL = import.meta.env.VITE_API_URL;

export default function UserData() {
  const token = useAuthStore((state) => state.token);
  const [slips, setSlips] = useState([]);
  const [userData, setUserData] = useState([]);
  const [confirmBuy, setConfirmBuy] = useState(false);

  useEffect(() => {
    getSlipData();
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:8000/admin/checkuser",
        `${URL}/admin/checkuser`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSlipData = async () => {
    try {
      const response = await axios.get(
        // "http://localhost:8000/admin/checkslip",
        `${URL}/admin/checkslip`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSlips(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateBuyStatus = async (id) => {
    try {
      const response = await axios.patch(
        // "http://localhost:8000/admin/updatebuystatus",
        `${URL}/admin/updatebuystatus`,
        { id: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      getSlipData();
    } catch (err) {
      console.log(err);
    }
  };

  const hdlClick = (item) => {
    updateBuyStatus(item.id);
  };

  return (
    <div className="m-16 font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <div className="mt-32">
        <h1>ผู้เรียนที่สมัครเข้ามาใหม่</h1>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Course Name</th>
                <th>Slip</th>
                <th>Date-Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {slips.map((item) => (
                <tr key={item.id}>
                  <th>{item.id}</th>
                  <td>{item.user.email}</td>
                  <td>{item.course.courseName}</td>
                  <td>
                    <button className="btn btn-sm">
                      <a
                        href={item.slipLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click me
                      </a>
                    </button>
                  </td>
                  <td> {new Date(item.enrolledAt).toLocaleString()}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      onClick={() => hdlClick(item)}
                    >
                      Confirm Slip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="divider mt-16"></div>
      <h1>ผู้เรียนเก่า</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Date-Time</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item) => (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.email}</th>
                <th>{item.role}</th>
                <th>{item.createdAt}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
