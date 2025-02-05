import { createClient } from '@/app/_adapters/supabase/server';
import Screen from '@/app/_components/Screen';
import UrlDashboard from '@/app/_components/UrlDashboard';
import { Tables } from '@/types/supabase';

export default async function DashboardPage() {
  const supabase = await createClient();
  const urls: Array<Tables<'short_urls'>> = [];

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase.from('short_urls').select('*').eq('created_by', user?.id);

  if (typeof data !== 'undefined' && data !== null) {
    urls.push(...data);
  }

  return (
    <Screen title="Dashboard">
      <UrlDashboard urls={urls} />
    </Screen>
  );
}
