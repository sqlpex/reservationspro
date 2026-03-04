import Layout from '../../components/Layout'
import { useAuth } from '../../hooks/useAuth'

export default function DashboardPage() {
  const { user } = useAuth()
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-6">Welcome back, {user?.name}.</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["Today's Reservations", 'Pending Confirmations', 'Upcoming (7 days)'].map((label) => (
          <div key={label} className="card">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl font-bold text-brand-600 mt-1">—</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-gray-400 italic">Coming soon — full dashboard implementation.</p>
    </Layout>
  )
}
