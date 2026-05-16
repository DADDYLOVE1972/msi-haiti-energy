const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const INQUIRIES_TABLE = import.meta.env.VITE_SUPABASE_INQUIRIES_TABLE || 'inquiries';

export async function submitInquiry(inquiry) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Inquiry database is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
  }

  const endpoint = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${INQUIRIES_TABLE}`;
  const payload = {
    name: inquiry.fullName,
    organization: inquiry.organization || null,
    email: inquiry.email,
    phone: inquiry.phone || null,
    inquiry_type: inquiry.inquiryType,
    message: inquiry.message,
    submitted_at: new Date().toISOString(),
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Inquiry could not be saved. Please try again or email MSI Haiti Energy directly.');
  }
}
