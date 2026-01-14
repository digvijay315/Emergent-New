
import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart, Line, BarChart, Bar,
  PieChart, Pie, Tooltip, XAxis, YAxis,
  ResponsiveContainer
} from "recharts";
import Header from "../Layout/Header";
import api from "../../../api";
import Footer from "../Layout/Footer";

export default function GaReport() {
  const [overview, setOverview] = useState(null);
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState([]);
  const [devices, setDevices] = useState([]);
  const [traffic, setTraffic] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchGA();
  }, []);

  const fetchGA = async () => {
    const [o, u, p, d, t,l] = await Promise.all([
      api.get("/api/ga/overview"),
      api.get("/api/ga/users"),
      api.get("/api/ga/pages"),
      api.get("/api/ga/devices"),
      api.get("/api/ga/traffic"),
      api.get("/api/ga/locations"),
    ]);

    setOverview(o.data);
    setUsers(
      u.data.rows.map(r => ({
        date: r.dimensionValues[0].value,
        users: Number(r.metricValues[0].value),
      }))
    );
    setPages(
      p.data.rows.map(r => ({
        page: r.dimensionValues[0].value,
        views: Number(r.metricValues[0].value),
      }))
    );
    setDevices(
      d.data.rows.map(r => ({
        name: r.dimensionValues[0].value,
        value: Number(r.metricValues[0].value),
      }))
    );
    setTraffic(t.data.rows);
    setLocations(l.data.rows);
  };

  return (
     <div className="min-h-screen bg-gray-50">
      <Header />



      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Google Analytics Overview</h1>
            <p className="text-gray-600">
              See your Google Analytics Report
            </p>
          </div>

        </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-blue-600">
      {overview?.totals?.[0]?.metricValues?.[0]?.value || 0}
    </div>
    <p className="text-sm text-gray-600">Total Users</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-green-600">
      {overview?.totals?.[0]?.metricValues?.[1]?.value || 0}
    </div>
    <p className="text-sm text-gray-600">Active Users (30 days)</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-purple-600">
      {overview?.totals?.[0]?.metricValues?.[2]?.value || 0}
    </div>
    <p className="text-sm text-gray-600">Total Sessions</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-orange-600">
      {overview?.totals?.[0]?.metricValues?.[3]?.value || 0}
    </div>
    <p className="text-sm text-gray-600">Page Views</p>
  </div>

</div>


      {/* USERS LINE */}
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-900">Users (30 Days)</h1>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={users}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line dataKey="users" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* TOP PAGES */}
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-900">Top Pages</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pages}>
            <XAxis dataKey="page" hide />
            <YAxis />
            <Tooltip />
            <Bar dataKey="views" />
          </BarChart>
        </ResponsiveContainer>
      </div>

<div className="bg-white p-4 rounded shadow">
  <h1 className="text-2xl font-bold text-gray-900">Top Countries</h1>

  <table className="w-full text-sm">
    <thead>
      <tr className="border-b">
        <th className="text-left py-2">Country</th>
        <th className="text-right py-2">Active Users</th>
      </tr>
    </thead>

    <tbody>
      {locations?.map((row, index) => (
        <tr key={index} className="border-b last:border-0">
          <td className="py-2">
            {row.dimensionValues[0].value}
          </td>
          <td className="py-2 text-right font-semibold">
            {row.metricValues[0].value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* DEVICES */}
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-900">Devices</h1>
        <PieChart width={300} height={300}>
          <Pie data={devices} dataKey="value" nameKey="name" label />
          <Tooltip />
        </PieChart>
      </div>

      {/* TRAFFIC TABLE */}
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-900">Traffic Sources</h1>
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Source</th>
              <th className="p-2">Medium</th>
              <th className="p-2">Sessions</th>
            </tr>
          </thead>
          <tbody>
            {traffic?.map((r, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{r.dimensionValues[0].value}</td>
                <td className="p-2">{r.dimensionValues[1].value}</td>
                <td className="p-2">{r.metricValues[0].value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    <Footer/>
    </div>
  );
}
