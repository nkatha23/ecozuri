// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ecmwehizddxujddtuneb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbXdlaGl6ZGR4dWpkZHR1bmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNzU1NDIsImV4cCI6MjA1NTk1MTU0Mn0.zqyuyNo3LyUkfw-tEj49svvrCvxTsYZjDKnCTw2qLzQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);