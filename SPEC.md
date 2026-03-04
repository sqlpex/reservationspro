# ReservationsPro — Project Specification

> **Status:** In progress
> **Last updated:** 2026-03-04
> **App name:** TBD (folder: `reservationspro`)

---

## 1. Overview

A full-stack web application for managing reservations across two verticals:

- **Restaurant table bookings**
- **Event seat reservations**

The app serves three user roles: customers, staff, and business owners.

---

## 2. Tech Stack

| Layer       | Technology                  |
|-------------|------------------------------|
| Frontend    | React (with Vite recommended) |
| Styling     | Tailwind CSS                 |
| Backend     | TBD (Node/Express or similar) |
| Database    | TBD (PostgreSQL recommended) |
| Auth        | TBD                          |
| Notifications | Email / SMS (e.g. SendGrid, Twilio) |

---

## 3. User Roles

### 3.1 Customer / Guest
- Browse availability (tables or event seats)
- Submit an online booking form
- Receive email/SMS confirmation
- View, edit, or cancel their own reservations

### 3.2 Staff / Admin
- View all reservations in a dashboard (calendar + list view)
- Create reservations manually on behalf of customers
- Update reservation status: `pending → confirmed → seated/checked-in → completed / cancelled`
- No analytics access (owner-only)

### 3.3 Business Owner
- All staff capabilities
- Access to analytics and reporting (occupancy, revenue, peak hours)
- Manage venues, tables, event seats, and time slots

---

## 4. Features

### 4.1 Customer-Facing

#### Browse & Search Availability
- Date/time picker
- Number of guests or seat count
- Filter by venue / event
- Real-time availability display

#### Online Booking Form
- Guest name, contact (email + phone)
- Date, time, party size
- Special requests / notes
- Booking confirmation screen

#### Notifications
- Email confirmation on booking creation
- Email/SMS reminder before the reservation
- Email/SMS on cancellation

#### Reservation Self-Management
- View upcoming reservations via booking reference or account
- Edit date/time (subject to availability)
- Cancel with configurable cancellation window

### 4.2 Staff / Admin

#### Reservation Dashboard
- Calendar view (day / week / month)
- List view with search and filters (status, date, venue)
- Quick-action buttons per reservation (confirm, seat, cancel)

#### Manual Booking Creation
- Same form as customer flow, usable by staff
- Override availability if needed (with confirmation)

#### Status Management
Reservation states:
```
pending → confirmed → seated/arrived → completed
                   ↘ cancelled
                   ↘ no-show
```

### 4.3 Business Owner

#### Analytics & Reports
- Daily / weekly / monthly occupancy rate
- Revenue tracking (if payments are integrated)
- Peak hours heatmap
- Cancellation and no-show rates
- Exportable reports (CSV)

---

## 5. Data Models (Draft)

### Reservation
```
id, venue_id, customer_id, event_id?,
date, time_slot, party_size,
status, special_requests,
created_at, updated_at
```

### Customer
```
id, name, email, phone,
created_at
```

### Venue
```
id, name, type (restaurant | event),
capacity, address,
created_at
```

### Table / Seat
```
id, venue_id, label, capacity,
is_active
```

### TimeSlot
```
id, venue_id, date, start_time, end_time,
available_capacity
```

### User (Staff / Owner)
```
id, name, email, password_hash,
role (staff | owner),
created_at
```

---

## 6. Pages & Routes (Draft)

### Customer Routes
| Route | Page |
|-------|------|
| `/` | Landing / home |
| `/book` | Availability search |
| `/book/confirm` | Booking form |
| `/book/success` | Confirmation screen |
| `/reservations/:ref` | View / manage reservation |

### Admin Routes
| Route | Page |
|-------|------|
| `/admin` | Dashboard (calendar/list) |
| `/admin/reservations` | Full reservation list |
| `/admin/reservations/new` | Manual booking creation |
| `/admin/reservations/:id` | Reservation detail & status |
| `/admin/analytics` | Reports (owner only) |
| `/admin/settings` | Venues, tables, time slots |

---

## 7. Non-Functional Requirements

- **Responsive design** — mobile-first
- **Accessible** — WCAG 2.1 AA target
- **Real-time updates** — reservation status changes reflected without full page reload (WebSocket or polling)
- **Timezone handling** — store in UTC, display in venue local time

---

## 8. Open Questions / TBD

- [ ] App name
- [ ] Backend framework (Node/Express, Django, etc.)
- [ ] Database choice (PostgreSQL, MySQL, etc.)
- [ ] Auth strategy (JWT, sessions, OAuth)
- [ ] Payment integration (Stripe?) — out of scope for MVP?
- [ ] Multi-venue support from day one or added later?
- [ ] Notification provider (SendGrid, Twilio, etc.)

---

## 9. MVP Scope

For the first working version, target:

1. Customer booking flow (search → form → confirmation)
2. Email confirmation notification
3. Staff dashboard with list view and status updates
4. Manual booking creation by staff
5. Basic auth (staff login)

Analytics, SMS, calendar view, and self-service reservation management can follow in later iterations.
