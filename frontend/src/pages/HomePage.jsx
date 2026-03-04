import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to ReservationsPro
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Restaurant table and event seat reservations — made simple.
        </p>
        <Link to="/book" className="btn-primary text-base px-6 py-3">
          Book a Table
        </Link>
      </div>
    </Layout>
  )
}
