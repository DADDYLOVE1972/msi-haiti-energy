const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const INQUIRIES_TABLE = import.meta.env.VITE_SUPABASE_INQUIRIES_TABLE || 'inquiries';
const LOCAL_STORAGE_KEY = 'msi_haiti_energy_inquiries';

export async function submitInquiry(inquiry) {
  const payload = createInquiryPayload(inquiry);

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    saveInquiryLocally(payload);
    return { mode: 'local' };
  }

  const endpoint = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${INQUIRIES_TABLE}`;

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

  return { mode: 'supabase' };
}

function createInquiryPayload(inquiry) {
  return {
    name: inquiry.fullName,
    organization: inquiry.organization || null,
    email: inquiry.email,
    phone: inquiry.phone || null,
    inquiry_type: inquiry.inquiryType,
    message: inquiry.message,
    submitted_at: new Date().toISOString(),
  };
}

function saveInquiryLocally(payload) {
  if (typeof window === 'undefined') {
    return;
  }

  const existing = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...existing, payload]));
}
