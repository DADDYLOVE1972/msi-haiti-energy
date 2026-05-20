const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const INQUIRIES_TABLE =
  import.meta.env.VITE_SUPABASE_INQUIRIES_TABLE || 'partner_inquiries';

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
    const errorText = await response.text();
    console.error('Supabase error:', errorText);
    throw new Error(`Supabase error: ${errorText}`);
  }

  return { mode: 'supabase' };
}

function createInquiryPayload(inquiry) {
  return {
    full_name: inquiry.fullName,
    organization: inquiry.organization || null,
    email: inquiry.email,
    phone: inquiry.phone || null,
    message: inquiry.message,
    created_at: new Date().toISOString(),
  };
}

function saveInquiryLocally(payload) {
  if (typeof window === 'undefined') {
    return;
  }

  const existing = JSON.parse(
    window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
  );

  window.localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify([...existing, payload])
  );
}