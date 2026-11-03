// Sends the café an email for each new booking (called by the bookings API)
export async function notifyCafe(booking, sendEmail) {
  const subject = `New booking: ${booking.name}, ${booking.guests} guests on ${booking.date}`;
  return sendEmail({ to: "hello@kopilabs.example", subject, text: JSON.stringify(booking, null, 2) });
}
