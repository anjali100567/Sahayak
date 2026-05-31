# Sahayak 🤝

A modern, full-stack web application designed to connect households with trusted local daily workers (maids, plumbers, electricians, cooks, tutors). Sahayak focuses on providing a premium, user-friendly interface to build a reliable and community-driven service network.

## Features ✨

*   **Beautiful Modern UI**: Built with a sleek, glass-morphism aesthetic and vibrant colors for a premium user experience.
*   **Worker Search & Filtering**: Easily browse and filter workers by category, minimum rating, and maximum hourly rate.
*   **Detailed Profiles**: View worker experience, ratings, and past reviews.
*   **Booking Flow**: Seamlessly request services, select dates/times, and choose mock payment methods (Card, UPI, Cash).
*   **Worker Dashboard**: A dedicated portal for workers to manage upcoming jobs and track earnings.
*   **Admin Panel**: A comprehensive dashboard for platform administrators to monitor analytics and approve new worker applications.
*   **Assistant Widget**: A floating interactive chatbot UI to assist users on any page.

## Tech Stack 🛠️

*   **Frontend**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: Custom Vanilla CSS with responsive design principles.
*   **Backend / Database**: Designed for integration with [Supabase](https://supabase.com/) (PostgreSQL & Auth).

## Getting Started 🚀

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/anjali100567/sahayak.git
    cd sahayak
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup (Supabase) 🗄️

The project includes a database schema ready for Supabase.
1. Create a new project on Supabase.
2. Navigate to the SQL Editor and run the SQL script located in `supabase/schema.sql`.
3. Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to a `.env.local` file in the root directory.

## Project Structure 📁

*   `src/app/` - Next.js App Router pages (Home, Search, Profile, Book, Dashboards).
*   `src/components/` - Reusable UI components (Navbar, Footer, WorkerCard, AssistantWidget).
*   `supabase/` - Database schema files.

## License 📄

This project is licensed under the MIT License.
