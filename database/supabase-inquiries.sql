create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organization text,
  email text not null,
  phone text,
  inquiry_type text not null check (
    inquiry_type in (
      'Investor',
      'NGO',
      'Government',
      'Technology Partner',
      'Donor',
      'Other'
    )
  ),
  message text not null,
  submitted_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

create policy "Allow public inquiry submissions"
on public.inquiries
for insert
to anon
with check (true);
