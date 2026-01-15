
import axios from "axios";
import { useEffect, useState } from "react";
import {
  LineChart, Line, BarChart, Bar,
  PieChart, Pie, Tooltip, XAxis, YAxis,AreaChart,Area,
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
  const [realtime, setrealtime] = useState([]);

  useEffect(() => {
    fetchGA();
  }, []);

  const fetchGA = async () => {
    const [o, u, p, d, t,l,r] = await Promise.all([
      api.get("/api/ga/overview"),
      api.get("/api/ga/users"),
      api.get("/api/ga/pages"),
      api.get("/api/ga/devices"),
      api.get("/api/ga/traffic"),
      api.get("/api/ga/locations"),
      api.get("/api/ga/realtime"),
    ]);

    setOverview(o.data);
    setUsers(u.data.data);
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
    setrealtime(r.data.rows);
    
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
      {overview?.data?.activeUsers || 0}
    </div>
    <p className="text-sm text-gray-600">Total Users</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-green-600">
      {overview?.data?.activeUsers || 0}
    </div>
    <p className="text-sm text-gray-600">Active Users (30 days)</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-purple-600">
      {overview?.data?.sessions || 0}
    </div>
    <p className="text-sm text-gray-600">Total Sessions</p>
  </div>

  <div className="bg-white rounded-lg shadow p-4">
    <div className="text-2xl font-bold text-orange-600">
      {overview?.data?.pageViews || 0}
    </div>
    <p className="text-sm text-gray-600">Page Views</p>
  </div>

</div>


<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

  {/* USERS LINE */}
  <div className="bg-white p-5 rounded-xl shadow-sm border">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-lg font-semibold text-gray-800">
        Users (Last 30 Days)
      </h1>
      <span className="text-sm text-gray-500">GA4</span>
    </div>

    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={users}>
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "1px solid #eee",
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#2563eb"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* TOP PAGES */}
  <div className="bg-white p-5 rounded-xl shadow-sm border">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-lg font-semibold text-gray-800">
        Top Pages
      </h1>
      <span className="text-sm text-gray-500">Views</span>
    </div>

    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={pages}>
        <XAxis 
          dataKey="page"
          hide
        />
        <YAxis 
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#fff",
            borderRadius: 8,
            border: "1px solid #eee",
          }}
        />
        <Bar 
          dataKey="views"
          radius={[6, 6, 0, 0]}
          fill="#10b981"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>

</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
{/* real time users */}
<div className="bg-white rounded-xl shadow-sm border p-6 text-center">
  <p className="text-sm text-gray-500">Users Online</p>
  <p className="text-5xl font-bold text-green-600 animate-pulse">
    {Number(realtime?.[0]?.metricValues?.[0]?.value || 0)}
  </p>
  <p className="text-xs text-gray-400 mt-1">Live</p>
</div>




      {/* DEVICES */}
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold text-gray-900">Devices</h1>
    <div className="flex justify-center items-center">
  <PieChart width={300} height={300}>
    <Pie
      data={devices}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      label
    />
    <Tooltip />
  </PieChart>
</div>

      </div>


</div>



<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
{/* top Countries */}
  <div className="bg-white rounded-xl shadow-sm border p-5">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-lg font-semibold text-gray-800">
      Top Countries
    </h1>
    <span className="text-sm text-gray-500">Active Users</span>
  </div>

  <table className="w-full text-sm">
    <thead>
      <tr className="border-b text-gray-500">
        <th className="text-left py-2 font-medium">Country</th>
        <th className="text-right py-2 font-medium">Users</th>
      </tr>
    </thead>

    <tbody>
      {locations?.slice(0, 7).map((row, index) => (
        <tr
          key={index}
          className="border-b last:border-0 hover:bg-gray-50 transition"
        >
          <td className="py-2 text-gray-700">
            {row.dimensionValues[0].value}
          </td>
          <td className="py-2 text-right font-semibold text-gray-900">
            {row.metricValues[0].value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
{/* Traffic Sources */}
<div className="bg-white rounded-xl shadow-sm border p-5">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-lg font-semibold text-gray-800">
      Traffic Sources
    </h1>
    <span className="text-sm text-gray-500">Sessions</span>
  </div>

  <table className="w-full text-sm">
    <thead>
      <tr className="border-b text-gray-500">
        <th className="text-left py-2 font-medium">Source</th>
        <th className="text-left py-2 font-medium">Medium</th>
        <th className="text-right py-2 font-medium">Sessions</th>
      </tr>
    </thead>

    <tbody>
      {traffic?.slice(0, 7).map((r, i) => (
        <tr
          key={i}
          className="border-b last:border-0 hover:bg-gray-50 transition"
        >
          <td className="py-2 text-gray-700">
            {r.dimensionValues[0].value}
          </td>
          <td className="py-2 text-gray-500">
            {r.dimensionValues[1].value}
          </td>
          <td className="py-2 text-right font-semibold text-gray-900">
            {r.metricValues[0].value}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


</div>

    </div>
    <Footer/>
    </div>
  );
}
